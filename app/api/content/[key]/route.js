// app/api/content/[key]/route.js
export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "../_helpers.js";

const EXTERNAL_API_URL = "https://virhomlms.megascale.co.in/data/content.json";

export async function GET(request, { params }) {
  try {
    const { key } = await params; // ← Await params first
    
    // Fetch data from external URL
    const response = await fetch(EXTERNAL_API_URL, {
      cache: "no-store", // Ensure fresh data on each request
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!(key in data)) {
      return NextResponse.json(
        { ok: false, error: "Key not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true, key, value: data[key] });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { key } = await params; // ← Await params first
    
    const body = await request.json();
    if (!body || typeof body.value === "undefined") {
      return NextResponse.json(
        { ok: false, error: "Request must include { value: ... }" },
        { status: 400 }
      );
    }
    const data = await readJsonFile();
    data[key] = body.value;
    await writeJsonFile(data);
    return NextResponse.json({ ok: true, key });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { key } = await params; // ← Await params first
    
    const data = await readJsonFile();
    if (!(key in data)) {
      return NextResponse.json(
        { ok: false, error: "Key not found" },
        { status: 404 }
      );
    }
    delete data[key];
    await writeJsonFile(data);
    return NextResponse.json({ ok: true, key });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}