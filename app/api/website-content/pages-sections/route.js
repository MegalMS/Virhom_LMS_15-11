import { connectDB } from "../../../../lib/db";
import WebsiteContent from "../../../../models/websiteContent";

export async function GET(req) {
  try {
    await connectDB();
    const pages = await WebsiteContent.distinct("page");
    const sections = await WebsiteContent.distinct("section");

    return Response.json({
      pages: pages.sort(),
      sections: sections.sort(),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
