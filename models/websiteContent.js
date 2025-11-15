import mongoose from "mongoose";

const websiteContentSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      enum: [
        "home",
        "dashboard",
        "features",
        "study-material",
        "login",
        "membership",
        "level-guide",
        "offline-study",
        "one-to-one-lessons",
        "practice-material",
        "progress-tracking",
        "reward-system",
        "study-tools",
        "support-system",
        "video-lessons",
        "voice-recognition",
      ],
    },
    section: {
      type: String,
      required: true,
      description: "e.g., header, hero, description, cta, footer, etc.",
    },
    textKey: {
      type: String,
      required: true,
      description: "Unique identifier for the text (e.g., heading, subheading)",
    },
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      description: "Admin notes about what this text is for",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// Create compound index for fast lookups
websiteContentSchema.index({ page: 1, section: 1, textKey: 1 }, { unique: true });

export default mongoose.models.WebsiteContent ||
  mongoose.model("WebsiteContent", websiteContentSchema);
