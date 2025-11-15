"use client";

import React, { useEffect, useState } from "react";

function prettify(json) {
  try {
    return JSON.stringify(json, null, 2);
  } catch {
    return "";
  }
}

export default function AdminPage() {
  const [data, setData] = useState(null); // full object
  const [loading, setLoading] = useState(true);
  const [selectedKey, setSelectedKey] = useState(null);
  const [editorText, setEditorText] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/content");
      const j = await res.json();
      if (j.ok) {
        setData(j.data || {});
      } else {
        setData({});
        setStatus("Failed to load: " + (j.error || "unknown"));
      }
    } catch (err) {
      setData({});
      setStatus("Failed to load: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  function selectKey(key) {
    setSelectedKey(key);
    setEditorText(prettify(data[key]));
    setStatus("");
  }

  async function saveKey() {
    setStatus("Saving...");
    try {
      const parsed = JSON.parse(editorText);
      const res = await fetch(`/api/content/${encodeURIComponent(selectedKey)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: parsed }),
      });
      const j = await res.json();
      if (j.ok) {
        await loadAll();
        setStatus("Saved.");
      } else {
        setStatus("Save failed: " + (j.error || "unknown"));
      }
    } catch (err) {
      setStatus("JSON error: " + err.message);
    }
  }

  async function saveWholeFile() {
    setStatus("Saving full file...");
    try {
      const parsed = JSON.parse(editorText);
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: parsed }),
      });
      const j = await res.json();
      if (j.ok) {
        await loadAll();
        setSelectedKey(null);
        setEditorText("");
        setStatus("Saved whole file.");
      } else {
        setStatus("Save failed: " + (j.error || "unknown"));
      }
    } catch (err) {
      setStatus("JSON error: " + err.message);
    }
  }

  async function editWhole() {
    setSelectedKey(null);
    setEditorText(prettify(data || {}));
    setStatus("");
  }

  async function deleteKey() {
    if (!selectedKey) return;
    if (!confirm(`Delete key "${selectedKey}"? This is destructive.`)) return;
    setStatus("Deleting...");
    const res = await fetch(`/api/content/${encodeURIComponent(selectedKey)}`, { method: "DELETE" });
    const j = await res.json();
    if (j.ok) {
      await loadAll();
      setSelectedKey(null);
      setEditorText("");
      setStatus("Deleted.");
    } else {
      setStatus("Delete failed: " + (j.error || "unknown"));
    }
  }

  if (loading) return <div style={{ padding: 20 }}>Loading…</div>;

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      <div style={{ width: 320 }}>
        <h2>Content keys</h2>
        <button onClick={editWhole} style={{ marginBottom: 8 }}>Edit whole file</button>
        <div style={{ border: "1px solid #eee", padding: 8, maxHeight: "70vh", overflow: "auto" }}>
          {Object.keys(data || {}).length === 0 && <div><em>No keys found</em></div>}
          {Object.keys(data || {}).map((k) => (
            <div key={k} style={{ marginBottom: 8 }}>
              <button
                onClick={() => selectKey(k)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "8px",
                  background: selectedKey === k ? "#f0f8ff" : "white",
                }}
              >
                {k}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h2>{selectedKey ? `Editing: ${selectedKey}` : "Editing: whole file"}</h2>
        <div style={{ marginBottom: 8 }}>
          <button onClick={() => { setEditorText(prettify(data)); setSelectedKey(null); }}>Reload pretty</button>
          <button onClick={() => { setEditorText(JSON.stringify(data, null, 2)); setSelectedKey(null); }} style={{ marginLeft: 8 }}>Pretty (2-space)</button>
        </div>
        <textarea
          value={editorText}
          onChange={(e) => setEditorText(e.target.value)}
          style={{ width: "100%", height: "60vh", fontFamily: "monospace", fontSize: 13, padding: 12 }}
        />
        <div style={{ marginTop: 8 }}>
          {selectedKey ? (
            <>
              <button onClick={saveKey}>Save Key</button>
              <button onClick={deleteKey} style={{ marginLeft: 8 }}>Delete Key</button>
            </>
          ) : (
            <button onClick={saveWholeFile}>Save Whole File</button>
          )}
          <button onClick={loadAll} style={{ marginLeft: 8 }}>Reload from disk</button>
        </div>

        {status && <div style={{ marginTop: 12, color: "#333" }}><strong>Status:</strong> {status}</div>}
      </div>
    </div>
  );
}
