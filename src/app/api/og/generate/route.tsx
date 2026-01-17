import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: Request) {
  // Redirect to the static OG image
  return NextResponse.redirect(new URL("/images/og-sejal.png", request.url));
}
