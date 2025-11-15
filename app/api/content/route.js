// app/api/content/route.js
import { NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "./_helpers.js";

export async function GET() {
  try {
    const data = await readJsonFile();
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

export async function POST(request) {
  // Replace entire file
  try {
    const body = await request.json(); // expect { data: {...} }
    if (!body || typeof body.data !== "object") {
      return NextResponse.json({ ok: false, error: "Request must include { data: { ... } }" }, { status: 400 });
    }
    await writeJsonFile(body.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
