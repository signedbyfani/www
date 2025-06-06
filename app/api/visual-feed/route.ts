import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const SUPPORTED_IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif"];
const SUPPORTED_VIDEO_EXTENSIONS = [".webm", ".mp4"];

export async function GET() {
  try {
    const visualFeedDir = path.join(process.cwd(), "public", "visual-feed");
    
    // Check if directory exists
    if (!fs.existsSync(visualFeedDir)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(visualFeedDir);
    const mediaItems = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return [...SUPPORTED_IMAGE_EXTENSIONS, ...SUPPORTED_VIDEO_EXTENSIONS].includes(ext);
      })
      .map(file => {
        const ext = path.extname(file).toLowerCase();
        const isVideo = SUPPORTED_VIDEO_EXTENSIONS.includes(ext);
        const filePath = path.join(visualFeedDir, file);
        const stats = fs.statSync(filePath);
        
        return {
          src: `/visual-feed/${file}`,
          type: isVideo ? "video" : "image",
          alt: path.parse(file).name.replace(/-/g, " "),
          createdAt: stats.birthtime.getTime(),
          modifiedAt: stats.mtime.getTime()
        };
      })
      .sort((a, b) => b.modifiedAt - a.modifiedAt); // Sort by modification date in descending order

    return NextResponse.json(mediaItems);
  } catch (error) {
    console.error("Error reading visual-feed directory:", error);
    return NextResponse.json({ error: "Failed to fetch media files" }, { status: 500 });
  }
} 