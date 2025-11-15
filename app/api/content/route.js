// app/api/content/route.js
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "./_helpers.js";

const EXTERNAL_API_URL = "https://virhomlms.megascale.co.in/data/content.json";

export async function GET() {
  try {
    // Fetch data from external URL
    console.log("Fetching from external URL:", EXTERNAL_API_URL);
    const response = await fetch(EXTERNAL_API_URL, {
      cache: "no-store", // Ensure fresh data on each request
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log("Successfully fetched data from external URL");
    console.log("Data keys:", Object.keys(data));
    return NextResponse.json(
      { 
        ok: true, 
        data,
        _meta: {
          source: "external",
          fetchedFrom: EXTERNAL_API_URL,
          timestamp: new Date().toISOString()
        }
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
          "X-Data-Source": "external-api",
          "X-Fetched-From": EXTERNAL_API_URL,
        },
      }
    );
  } catch (err) {
    console.error("Error fetching from external URL:", err);
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
