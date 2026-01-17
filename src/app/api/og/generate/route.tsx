import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    // Read the static OG image file
    const imagePath = join(process.cwd(), "public", "images", "og-sejal.png");
    const imageBuffer = await readFile(imagePath);

    // Return the image with proper headers
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error loading OG image:", error);
    return new NextResponse("Image not found", { status: 404 });
  }
}
