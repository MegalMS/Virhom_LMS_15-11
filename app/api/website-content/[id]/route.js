import { connectDB } from "../../../../lib/db";
import WebsiteContent from "../../../../models/websiteContent";
import { getServerSession } from "next-auth";

// GET: Fetch specific content
export async function GET(req, { params }) {
  try {
    await connectDB();
    const content = await WebsiteContent.findById(params.id).populate(
      "updatedBy",
      "name email"
    );

    if (!content) {
      return Response.json({ error: "Content not found" }, { status: 404 });
    }

    return Response.json(content);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// PUT: Update content
export async function PUT(req, { params }) {
  try {
    const session = await getServerSession();
    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();
    const { content, description } = body;

    const updatedContent = await WebsiteContent.findByIdAndUpdate(
      params.id,
      {
        content,
        description,
        updatedBy: session.user.id,
      },
      { new: true }
    ).populate("updatedBy", "name email");

    if (!updatedContent) {
      return Response.json({ error: "Content not found" }, { status: 404 });
    }

    return Response.json(updatedContent);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

// DELETE: Delete content
export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession();
    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const deletedContent = await WebsiteContent.findByIdAndDelete(params.id);

    if (!deletedContent) {
      return Response.json({ error: "Content not found" }, { status: 404 });
    }

    return Response.json({ message: "Content deleted successfully" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
