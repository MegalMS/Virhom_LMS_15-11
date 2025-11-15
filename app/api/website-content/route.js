import { connectDB } from "../../../lib/db";
import WebsiteContent from "../../../models/websiteContent";
import { getServerSession } from "next-auth";

// GET: Fetch content with optional filtering
export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const section = searchParams.get("section");

    const filter = {};
    if (page) filter.page = page;
    if (section) filter.section = section;

    const content = await WebsiteContent.find(filter).populate("updatedBy", "name email");
    return Response.json(content);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// POST: Create new content
export async function POST(req) {
  try {
    const session = await getServerSession();
    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();
    const { page, section, textKey, content, description } = body;

    const newContent = new WebsiteContent({
      page,
      section,
      textKey,
      content,
      description,
      updatedBy: session.user.id,
    });

    await newContent.save();
    return Response.json(newContent, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
