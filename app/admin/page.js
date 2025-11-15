"use client";

import React, { useEffect, useState } from "react";
import { Save, RefreshCw, Trash2, Edit3, FileText, AlertCircle, CheckCircle, ChevronDown, ChevronRight } from "lucide-react";

function FormField({ label, value, onChange, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base resize-y min-h-[100px]"
          placeholder={`Enter ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          type={type}
          value={value || ""}
          onChange={(e) => onChange(type === "number" ? parseFloat(e.target.value) : e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base"
          placeholder={`Enter ${label.toLowerCase()}...`}
        />
      )}
    </div>
  );
}

function ArrayField({ label, items, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const newItems = [...items];
                newItems[idx] = e.target.value;
                onChange(newItems);
              }}
              className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder={`Item ${idx + 1}`}
            />
            <button
              onClick={() => onChange(items.filter((_, i) => i !== idx))}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() => onChange([...items, ""])}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
        >
          + Add Item
        </button>
      </div>
    </div>
  );
}

function ItemCard({ item, index, onUpdate, onDelete }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-gray-700">Item {index + 1}</span>
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
      {Object.entries(item).map(([key, value]) => {
        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        return (
          <div key={key} className="mb-3">
            <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
            {typeof value === "number" ? (
              <input
                type="number"
                value={value}
                onChange={(e) => onUpdate({ ...item, [key]: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            ) : typeof value === "string" && value.length > 50 ? (
              <textarea
                value={value}
                onChange={(e) => onUpdate({ ...item, [key]: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-y min-h-[80px]"
              />
            ) : (
              <input
                type="text"
                value={value}
                onChange={(e) => onUpdate({ ...item, [key]: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function ArrayOfObjectsField({ label, items, onChange }) {
  const addNewItem = () => {
    if (items.length > 0) {
      // Create a template based on first item with empty values
      const template = Object.keys(items[0]).reduce((acc, key) => {
        acc[key] = typeof items[0][key] === "number" ? 0 : "";
        return acc;
      }, {});
      onChange([...items, template]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        {label}
      </label>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <ItemCard
            key={idx}
            item={item}
            index={idx}
            onUpdate={(updatedItem) => {
              const newItems = [...items];
              newItems[idx] = updatedItem;
              onChange(newItems);
            }}
            onDelete={() => onChange(items.filter((_, i) => i !== idx))}
          />
        ))}
        {items.length > 0 && (
          <button
            onClick={addNewItem}
            className="w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
          >
            + Add New {label.slice(0, -1) || "Item"}
          </button>
        )}
      </div>
    </div>
  );
}

function ObjectSection({ title, obj, onChange, isOpen, onToggle }) {
  // Helper to detect if a string is JSON
  const tryParseJSON = (str) => {
    try {
      const parsed = JSON.parse(str);
      return { success: true, data: parsed };
    } catch {
      return { success: false, data: null };
    }
  };

  return (
    <div className="mb-4 border-2 border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-semibold text-gray-800">{title}</span>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {Object.entries(obj).map(([key, value]) => {
            const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            
            // Check if string is actually JSON
            if (typeof value === "string") {
              const jsonCheck = tryParseJSON(value);
              
              if (jsonCheck.success && Array.isArray(jsonCheck.data) && jsonCheck.data.every(item => typeof item === "object")) {
                // It's a stringified array of objects
                return (
                  <ArrayOfObjectsField
                    key={key}
                    label={label}
                    items={jsonCheck.data}
                    onChange={(newItems) => onChange({ ...obj, [key]: JSON.stringify(newItems) })}
                  />
                );
              } else if (jsonCheck.success && Array.isArray(jsonCheck.data) && jsonCheck.data.every(item => typeof item === "string")) {
                // It's a stringified array of strings
                return (
                  <ArrayField
                    key={key}
                    label={label}
                    items={jsonCheck.data}
                    onChange={(newItems) => onChange({ ...obj, [key]: JSON.stringify(newItems) })}
                  />
                );
              }
              
              // Regular string
              return (
                <FormField
                  key={key}
                  label={label}
                  value={value}
                  type={value.length > 50 ? "textarea" : "text"}
                  onChange={(newVal) => onChange({ ...obj, [key]: newVal })}
                />
              );
            } else if (typeof value === "number") {
              return (
                <FormField
                  key={key}
                  label={label}
                  value={value}
                  type="number"
                  onChange={(newVal) => onChange({ ...obj, [key]: newVal })}
                />
              );
            } else if (Array.isArray(value)) {
              if (value.every(v => typeof v === "string")) {
                return (
                  <ArrayField
                    key={key}
                    label={label}
                    items={value}
                    onChange={(newItems) => onChange({ ...obj, [key]: newItems })}
                  />
                );
              } else if (value.every(v => typeof v === "object")) {
                return (
                  <ArrayOfObjectsField
                    key={key}
                    label={label}
                    items={value}
                    onChange={(newItems) => onChange({ ...obj, [key]: newItems })}
                  />
                );
              }
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}

function SmartFormEditor({ value, onChange }) {
  const [openSections, setOpenSections] = useState({});
  
  useEffect(() => {
    // Auto-open first section
    if (typeof value === "object" && !Array.isArray(value)) {
      const keys = Object.keys(value);
      if (keys.length > 0) {
        setOpenSections({ [keys[0]]: true });
      }
    }
  }, []);

  // Helper to detect if a string is JSON
  const tryParseJSON = (str) => {
    try {
      const parsed = JSON.parse(str);
      return { success: true, data: parsed };
    } catch {
      return { success: false, data: null };
    }
  };

  // Simple string value - check if it's JSON
  if (typeof value === "string") {
    const jsonCheck = tryParseJSON(value);
    
    if (jsonCheck.success && Array.isArray(jsonCheck.data) && jsonCheck.data.every(item => typeof item === "object")) {
      return (
        <ArrayOfObjectsField
          label="Items"
          items={jsonCheck.data}
          onChange={(newItems) => onChange(JSON.stringify(newItems))}
        />
      );
    } else if (jsonCheck.success && Array.isArray(jsonCheck.data) && jsonCheck.data.every(item => typeof item === "string")) {
      return (
        <ArrayField
          label="Items"
          items={jsonCheck.data}
          onChange={(newItems) => onChange(JSON.stringify(newItems))}
        />
      );
    }
    
    return (
      <FormField
        label="Content"
        value={value}
        type={value.length > 50 ? "textarea" : "text"}
        onChange={onChange}
      />
    );
  }

  // Simple number value
  if (typeof value === "number") {
    return (
      <FormField
        label="Value"
        value={value}
        type="number"
        onChange={onChange}
      />
    );
  }

  // Simple array of strings
  if (Array.isArray(value) && value.every(v => typeof v === "string")) {
    return (
      <ArrayField
        label="Items"
        items={value}
        onChange={onChange}
      />
    );
  }

  // Array of objects
  if (Array.isArray(value) && value.every(v => typeof v === "object")) {
    return (
      <ArrayOfObjectsField
        label="Items"
        items={value}
        onChange={onChange}
      />
    );
  }

  // Object with nested structure
  if (typeof value === "object" && !Array.isArray(value)) {
    const entries = Object.entries(value);
    
    return (
      <div className="space-y-4">
        {entries.map(([key, val]) => {
          const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
          
          // Check if string is JSON
          if (typeof val === "string") {
            const jsonCheck = tryParseJSON(val);
            
            if (jsonCheck.success && Array.isArray(jsonCheck.data) && jsonCheck.data.every(item => typeof item === "object")) {
              return (
                <ArrayOfObjectsField
                  key={key}
                  label={label}
                  items={jsonCheck.data}
                  onChange={(newItems) => onChange({ ...value, [key]: JSON.stringify(newItems) })}
                />
              );
            } else if (jsonCheck.success && Array.isArray(jsonCheck.data) && jsonCheck.data.every(item => typeof item === "string")) {
              return (
                <ArrayField
                  key={key}
                  label={label}
                  items={jsonCheck.data}
                  onChange={(newItems) => onChange({ ...value, [key]: JSON.stringify(newItems) })}
                />
              );
            }
            
            return (
              <FormField
                key={key}
                label={label}
                value={val}
                type={val.length > 50 ? "textarea" : "text"}
                onChange={(newVal) => onChange({ ...value, [key]: newVal })}
              />
            );
          }
          
          // If the value is an object, create a collapsible section
          if (typeof val === "object" && !Array.isArray(val)) {
            return (
              <ObjectSection
                key={key}
                title={label}
                obj={val}
                isOpen={openSections[key]}
                onToggle={() => setOpenSections({ ...openSections, [key]: !openSections[key] })}
                onChange={(newObj) => onChange({ ...value, [key]: newObj })}
              />
            );
          }
          
          // Number field
          if (typeof val === "number") {
            return (
              <FormField
                key={key}
                label={label}
                value={val}
                type="number"
                onChange={(newVal) => onChange({ ...value, [key]: newVal })}
              />
            );
          }
          
          // Array of strings
          if (Array.isArray(val) && val.every(v => typeof v === "string")) {
            return (
              <ArrayField
                key={key}
                label={label}
                items={val}
                onChange={(newItems) => onChange({ ...value, [key]: newItems })}
              />
            );
          }
          
          // Array of objects
          if (Array.isArray(val) && val.every(v => typeof v === "object")) {
            return (
              <ArrayOfObjectsField
                key={key}
                label={label}
                items={val}
                onChange={(newItems) => onChange({ ...value, [key]: newItems })}
              />
            );
          }
          
          return null;
        })}
      </div>
    );
  }

  // Fallback for complex structures
  return (
    <div>
      <div className="mb-2 px-4 py-2 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
        <p className="font-semibold">Advanced Structure Detected</p>
        <p className="text-sm">This content has a complex structure. Contact support if you need to edit it.</p>
      </div>
      <textarea
        value={JSON.stringify(value, null, 2)}
        readOnly
        className="w-full h-64 px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
      />
    </div>
  );
}

export default function AdminPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedKey, setSelectedKey] = useState(null);
  const [editValue, setEditValue] = useState(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const res = await fetch("/api/content");
      const j = await res.json();
      if (j.ok) {
        setData(j.data || {});
      } else {
        setData({});
        setStatus({ type: "error", message: "Failed to load: " + (j.error || "unknown") });
      }
    } catch (err) {
      setData({});
      setStatus({ type: "error", message: "Failed to load: " + err.message });
    } finally {
      setLoading(false);
    }
  }

  function selectKey(key) {
    setSelectedKey(key);
    setEditValue(data[key]);
    setStatus({ type: "", message: "" });
  }

  async function saveKey() {
    setStatus({ type: "info", message: "Saving..." });
    try {
      const res = await fetch(`/api/content/${encodeURIComponent(selectedKey)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: editValue }),
      });
      const j = await res.json();
      if (j.ok) {
        await loadAll();
        setStatus({ type: "success", message: "✓ Saved successfully!" });
        setTimeout(() => setStatus({ type: "", message: "" }), 3000);
      } else {
        setStatus({ type: "error", message: "Save failed: " + (j.error || "unknown") });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Error: " + err.message });
    }
  }

  // async function deleteKey() {
  //   if (!selectedKey) return;
  //   if (!confirm(`Are you sure you want to delete "${selectedKey}"? This cannot be undone.`)) return;
  //   setStatus({ type: "info", message: "Deleting..." });
  //   const res = await fetch(`/api/content/${encodeURIComponent(selectedKey)}`, { method: "DELETE" });
  //   const j = await res.json();
  //   if (j.ok) {
  //     await loadAll();
  //     setSelectedKey(null);
  //     setEditValue(null);
  //     setStatus({ type: "success", message: "✓ Deleted successfully!" });
  //     setTimeout(() => setStatus({ type: "", message: "" }), 3000);
  //   } else {
  //     setStatus({ type: "error", message: "Delete failed: " + (j.error || "unknown") });
  //   }
  // }

  const filteredKeys = Object.keys(data || {}).filter(k =>
    k.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <RefreshCw className="animate-spin mx-auto mb-4 text-blue-500" size={48} />
          <p className="text-gray-600 text-lg">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-500" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Content Editor</h1>
                <p className="text-sm text-gray-500">Manage your website content easily</p>
              </div>
            </div>
            <button
              onClick={loadAll}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <RefreshCw size={16} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Status Banner */}
      {status.message && (
        <div className={`max-w-7xl mx-auto px-6 py-3 mt-4 rounded-lg flex items-center gap-2 ${
          status.type === "success" ? "bg-green-100 text-green-800" :
          status.type === "error" ? "bg-red-100 text-red-800" :
          "bg-blue-100 text-blue-800"
        }`}>
          {status.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span className="font-medium">{status.message}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar - Content List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Content Items</h2>
              
              {/* Search */}
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />

              {/* List */}
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {filteredKeys.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <FileText size={48} className="mx-auto mb-2 opacity-50" />
                    <p>No content items found</p>
                  </div>
                ) : (
                  filteredKeys.map((k) => (
                    <button
                      key={k}
                      onClick={() => selectKey(k)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        selectedKey === k
                          ? "bg-blue-500 text-white shadow-md"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Edit3 size={16} />
                        <span className="font-medium truncate">{k}</span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Main Editor */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {!selectedKey ? (
                <div className="text-center py-16 text-gray-400">
                  <Edit3 size={64} className="mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">Select an item to edit</h3>
                  <p>Choose a content item from the list to start editing</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">
                      {selectedKey}
                    </h2>
                    <p className="text-sm text-gray-500">Edit the fields below</p>
                  </div>

                  <div className="max-h-[600px] overflow-y-auto pr-2">
                    <SmartFormEditor
                      value={editValue}
                      onChange={setEditValue}
                    />
                  </div>

                  <div className="flex gap-3 mt-6 pt-6 border-t">
                    <button
                      onClick={saveKey}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-sm"
                    >
                      <Save size={18} />
                      Save Changes
                    </button>
                    {/* <button
                      onClick={deleteKey}
                      className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium shadow-sm"
                    >
                      <Trash2 size={18} />
                      Delete
                    </button> */}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import { Save, RefreshCw, Trash2, Edit3, FileText, AlertCircle, CheckCircle, ChevronDown, ChevronRight } from "lucide-react";

// function FormField({ label, value, onChange, type = "text" }) {
//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-semibold text-gray-700 mb-2">
//         {label}
//       </label>
//       {type === "textarea" ? (
//         <textarea
//           value={value || ""}
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base resize-y min-h-[100px]"
//           placeholder={`Enter ${label.toLowerCase()}...`}
//         />
//       ) : (
//         <input
//           type={type}
//           value={value || ""}
//           onChange={(e) => onChange(type === "number" ? parseFloat(e.target.value) : e.target.value)}
//           className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base"
//           placeholder={`Enter ${label.toLowerCase()}...`}
//         />
//       )}
//     </div>
//   );
// }

// function ArrayField({ label, items, onChange }) {
//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-semibold text-gray-700 mb-2">
//         {label}
//       </label>
//       <div className="space-y-2">
//         {items.map((item, idx) => (
//           <div key={idx} className="flex gap-2">
//             <input
//               type="text"
//               value={item}
//               onChange={(e) => {
//                 const newItems = [...items];
//                 newItems[idx] = e.target.value;
//                 onChange(newItems);
//               }}
//               className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               placeholder={`Item ${idx + 1}`}
//             />
//             <button
//               onClick={() => onChange(items.filter((_, i) => i !== idx))}
//               className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           onClick={() => onChange([...items, ""])}
//           className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
//         >
//           + Add Item
//         </button>
//       </div>
//     </div>
//   );
// }

// function ObjectSection({ title, obj, onChange, isOpen, onToggle }) {
//   return (
//     <div className="mb-4 border-2 border-gray-200 rounded-lg overflow-hidden">
//       <button
//         onClick={onToggle}
//         className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
//       >
//         <span className="font-semibold text-gray-800">{title}</span>
//         {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
//       </button>
//       {isOpen && (
//         <div className="p-4 bg-white">
//           {Object.entries(obj).map(([key, value]) => {
//             const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            
//             if (typeof value === "string") {
//               return (
//                 <FormField
//                   key={key}
//                   label={label}
//                   value={value}
//                   type={value.length > 50 ? "textarea" : "text"}
//                   onChange={(newVal) => onChange({ ...obj, [key]: newVal })}
//                 />
//               );
//             } else if (typeof value === "number") {
//               return (
//                 <FormField
//                   key={key}
//                   label={label}
//                   value={value}
//                   type="number"
//                   onChange={(newVal) => onChange({ ...obj, [key]: newVal })}
//                 />
//               );
//             } else if (Array.isArray(value) && value.every(v => typeof v === "string")) {
//               return (
//                 <ArrayField
//                   key={key}
//                   label={label}
//                   items={value}
//                   onChange={(newItems) => onChange({ ...obj, [key]: newItems })}
//                 />
//               );
//             }
//             return null;
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// function SmartFormEditor({ value, onChange }) {
//   const [openSections, setOpenSections] = useState({});
  
//   useEffect(() => {
//     // Auto-open first section
//     if (typeof value === "object" && !Array.isArray(value)) {
//       const keys = Object.keys(value);
//       if (keys.length > 0) {
//         setOpenSections({ [keys[0]]: true });
//       }
//     }
//   }, []);

//   // Simple string value
//   if (typeof value === "string") {
//     return (
//       <FormField
//         label="Content"
//         value={value}
//         type={value.length > 50 ? "textarea" : "text"}
//         onChange={onChange}
//       />
//     );
//   }

//   // Simple number value
//   if (typeof value === "number") {
//     return (
//       <FormField
//         label="Value"
//         value={value}
//         type="number"
//         onChange={onChange}
//       />
//     );
//   }

//   // Simple array of strings
//   if (Array.isArray(value) && value.every(v => typeof v === "string")) {
//     return (
//       <ArrayField
//         label="Items"
//         items={value}
//         onChange={onChange}
//       />
//     );
//   }

//   // Object with nested structure
//   if (typeof value === "object" && !Array.isArray(value)) {
//     const entries = Object.entries(value);
    
//     return (
//       <div className="space-y-4">
//         {entries.map(([key, val]) => {
//           const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
          
//           // If the value is an object, create a collapsible section
//           if (typeof val === "object" && !Array.isArray(val)) {
//             return (
//               <ObjectSection
//                 key={key}
//                 title={label}
//                 obj={val}
//                 isOpen={openSections[key]}
//                 onToggle={() => setOpenSections({ ...openSections, [key]: !openSections[key] })}
//                 onChange={(newObj) => onChange({ ...value, [key]: newObj })}
//               />
//             );
//           }
          
//           // Simple string field
//           if (typeof val === "string") {
//             return (
//               <FormField
//                 key={key}
//                 label={label}
//                 value={val}
//                 type={val.length > 50 ? "textarea" : "text"}
//                 onChange={(newVal) => onChange({ ...value, [key]: newVal })}
//               />
//             );
//           }
          
//           // Number field
//           if (typeof val === "number") {
//             return (
//               <FormField
//                 key={key}
//                 label={label}
//                 value={val}
//                 type="number"
//                 onChange={(newVal) => onChange({ ...value, [key]: newVal })}
//               />
//             );
//           }
          
//           // Array of strings
//           if (Array.isArray(val) && val.every(v => typeof v === "string")) {
//             return (
//               <ArrayField
//                 key={key}
//                 label={label}
//                 items={val}
//                 onChange={(newItems) => onChange({ ...value, [key]: newItems })}
//               />
//             );
//           }
          
//           return null;
//         })}
//       </div>
//     );
//   }

//   // Fallback for complex structures
//   return (
//     <div>
//       <div className="mb-2 px-4 py-2 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
//         <p className="font-semibold">Advanced Structure Detected</p>
//         <p className="text-sm">This content has a complex structure. Contact support if you need to edit it.</p>
//       </div>
//       <textarea
//         value={JSON.stringify(value, null, 2)}
//         readOnly
//         className="w-full h-64 px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
//       />
//     </div>
//   );
// }

// export default function AdminPage() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedKey, setSelectedKey] = useState(null);
//   const [editValue, setEditValue] = useState(null);
//   const [status, setStatus] = useState({ type: "", message: "" });
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     loadAll();
//   }, []);

//   async function loadAll() {
//     setLoading(true);
//     setStatus({ type: "", message: "" });
//     try {
//       const res = await fetch("/api/content");
//       const j = await res.json();
//       if (j.ok) {
//         setData(j.data || {});
//       } else {
//         setData({});
//         setStatus({ type: "error", message: "Failed to load: " + (j.error || "unknown") });
//       }
//     } catch (err) {
//       setData({});
//       setStatus({ type: "error", message: "Failed to load: " + err.message });
//     } finally {
//       setLoading(false);
//     }
//   }

//   function selectKey(key) {
//     setSelectedKey(key);
//     setEditValue(data[key]);
//     setStatus({ type: "", message: "" });
//   }

//   async function saveKey() {
//     setStatus({ type: "info", message: "Saving..." });
//     try {
//       const res = await fetch(`/api/content/${encodeURIComponent(selectedKey)}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ value: editValue }),
//       });
//       const j = await res.json();
//       if (j.ok) {
//         await loadAll();
//         setStatus({ type: "success", message: "✓ Saved successfully!" });
//         setTimeout(() => setStatus({ type: "", message: "" }), 3000);
//       } else {
//         setStatus({ type: "error", message: "Save failed: " + (j.error || "unknown") });
//       }
//     } catch (err) {
//       setStatus({ type: "error", message: "Error: " + err.message });
//     }
//   }

//   async function deleteKey() {
//     if (!selectedKey) return;
//     if (!confirm(`Are you sure you want to delete "${selectedKey}"? This cannot be undone.`)) return;
//     setStatus({ type: "info", message: "Deleting..." });
//     const res = await fetch(`/api/content/${encodeURIComponent(selectedKey)}`, { method: "DELETE" });
//     const j = await res.json();
//     if (j.ok) {
//       await loadAll();
//       setSelectedKey(null);
//       setEditValue(null);
//       setStatus({ type: "success", message: "✓ Deleted successfully!" });
//       setTimeout(() => setStatus({ type: "", message: "" }), 3000);
//     } else {
//       setStatus({ type: "error", message: "Delete failed: " + (j.error || "unknown") });
//     }
//   }

//   const filteredKeys = Object.keys(data || {}).filter(k =>
//     k.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-50">
//         <div className="text-center">
//           <RefreshCw className="animate-spin mx-auto mb-4 text-blue-500" size={48} />
//           <p className="text-gray-600 text-lg">Loading content...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <FileText className="text-blue-500" size={32} />
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-800">Content Editor</h1>
//                 <p className="text-sm text-gray-500">Manage your website content easily</p>
//               </div>
//             </div>
//             <button
//               onClick={loadAll}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//             >
//               <RefreshCw size={16} />
//               Refresh
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Status Banner */}
//       {status.message && (
//         <div className={`max-w-7xl mx-auto px-6 py-3 mt-4 rounded-lg flex items-center gap-2 ${
//           status.type === "success" ? "bg-green-100 text-green-800" :
//           status.type === "error" ? "bg-red-100 text-red-800" :
//           "bg-blue-100 text-blue-800"
//         }`}>
//           {status.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
//           <span className="font-medium">{status.message}</span>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Sidebar - Content List */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-sm p-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">Content Items</h2>
              
//               {/* Search */}
//               <input
//                 type="text"
//                 placeholder="Search content..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               />

//               {/* List */}
//               <div className="space-y-2 max-h-[600px] overflow-y-auto">
//                 {filteredKeys.length === 0 ? (
//                   <div className="text-center py-8 text-gray-400">
//                     <FileText size={48} className="mx-auto mb-2 opacity-50" />
//                     <p>No content items found</p>
//                   </div>
//                 ) : (
//                   filteredKeys.map((k) => (
//                     <button
//                       key={k}
//                       onClick={() => selectKey(k)}
//                       className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
//                         selectedKey === k
//                           ? "bg-blue-500 text-white shadow-md"
//                           : "bg-gray-50 hover:bg-gray-100 text-gray-700"
//                       }`}
//                     >
//                       <div className="flex items-center gap-2">
//                         <Edit3 size={16} />
//                         <span className="font-medium truncate">{k}</span>
//                       </div>
//                     </button>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Main Editor */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-sm p-6">
//               {!selectedKey ? (
//                 <div className="text-center py-16 text-gray-400">
//                   <Edit3 size={64} className="mx-auto mb-4 opacity-50" />
//                   <h3 className="text-xl font-semibold mb-2">Select an item to edit</h3>
//                   <p>Choose a content item from the list to start editing</p>
//                 </div>
//               ) : (
//                 <>
//                   <div className="mb-6">
//                     <h2 className="text-xl font-semibold text-gray-800 mb-1">
//                       {selectedKey}
//                     </h2>
//                     <p className="text-sm text-gray-500">Edit the fields below</p>
//                   </div>

//                   <div className="max-h-[600px] overflow-y-auto pr-2">
//                     <SmartFormEditor
//                       value={editValue}
//                       onChange={setEditValue}
//                     />
//                   </div>

//                   <div className="flex gap-3 mt-6 pt-6 border-t">
//                     <button
//                       onClick={saveKey}
//                       className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-sm"
//                     >
//                       <Save size={18} />
//                       Save Changes
//                     </button>
//                     <button
//                       onClick={deleteKey}
//                       className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium shadow-sm"
//                     >
//                       <Trash2 size={18} />
//                       Delete
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }