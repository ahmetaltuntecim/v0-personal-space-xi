import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ipAddress, userAgent, device, os, browser, cookies, sourceUrl } = body;

    // Use Supabase to insert visitor log
    const { error } = await supabase
      .from("visitor_logs")
      .insert([
        {
          ip_address: ipAddress || "Unknown",
          user_agent: userAgent || "Unknown",
          device: device || "Unknown device",
          os: os || "Unknown OS",
          browser: browser || "Unknown browser",
          cookies: cookies || "No cookies",
          source_url: sourceUrl || "/",
        },
      ]);

    if (error) {
      console.error("Supabase Error logging visitor:", error);
      return NextResponse.json({ success: false, error: "Failed to log visitor" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error connecting to Supabase:", error);
    return NextResponse.json({ success: false, error: "Failed to log visitor" }, { status: 500 });
  }
}
