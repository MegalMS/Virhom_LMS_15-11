// // app/api/content/route.js
// import { NextResponse } from "next/server";
// import { readJsonFile, writeJsonFile } from "./_helpers.js";

// export async function GET() {
//   try {
//     const data = await readJsonFile();
//     return NextResponse.json({ ok: true, data });
//   } catch (err) {
//     return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
//   }
// }

// export async function POST(request) {
//   // Replace entire file
//   try {
//     const body = await request.json(); // expect { data: {...} }
//     if (!body || typeof body.data !== "object") {
//       return NextResponse.json({ ok: false, error: "Request must include { data: { ... } }" }, { status: 400 });
//     }
//     await writeJsonFile(body.data);
//     return NextResponse.json({ ok: true });
//   } catch (err) {
//     return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server";

// URL to your external JSON file
const JSON_URL = "https://virhomlms.megascale.co.in/data/content.json";

// URL to your PHP update API
const UPDATE_URL = "https://virhomlms.megascale.co.in/update-json.php";

// GET = read JSON from your server
export async function GET() {
  try {
    const res = await fetch(JSON_URL);
    const data = await res.json();
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

// POST = update JSON through PHP server
export async function POST(request) {
  try {
    const body = await request.json();

    if (!body || typeof body.data !== "object") {
      return NextResponse.json(
        { ok: false, error: "Request must include { data: { ... } }" },
        { status: 400 }
      );
    }

    const res = await fetch(UPDATE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: body.data }),
    });

    const result = await res.json();
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}
