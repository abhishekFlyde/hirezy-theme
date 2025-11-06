import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// ✅ Handle OPTIONS (Preflight) request
export function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// ✅ POST Form
export async function POST(req) {
  try {
    await connectDB();
    const { fullName, email, phone, message } = await req.json();

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, msg: "All fields required" },
        { status: 400, headers: corsHeaders }
      );
    }

    await Contact.create({ fullName, email, phone, message });

    return NextResponse.json(
      { success: true, msg: "Message saved" },
      { headers: corsHeaders }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, msg: "Server error", err: err.message },
      { status: 500, headers: corsHeaders }
    );
  }
}

// ✅ GET Forms
export async function GET() {
  try {
    await connectDB();
    const forms = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: forms.length,
        data: forms,
      },
      { headers: corsHeaders }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, msg: "Server error", err: err.message },
      { status: 500, headers: corsHeaders }
    );
  }
}
