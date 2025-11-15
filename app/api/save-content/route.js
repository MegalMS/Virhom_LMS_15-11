import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(req) {
  try {
    const content = await req.json();
    
    // Save to public/content.json
    const filePath = join(process.cwd(), "public", "content.json");
    await writeFile(filePath, JSON.stringify(content, null, 2), "utf-8");
    
    return Response.json({ success: true, message: "Content saved successfully" });
  } catch (error) {
    console.error("Error saving content:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
