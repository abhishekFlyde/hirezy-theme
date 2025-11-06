import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

// ✅ CORS Header
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // you can put specific domain later
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// ✅ Handle Preflight OPTIONS
export function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// ✅ POST -> Create user
export async function POST(req) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, msg: "All fields required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { success: false, msg: "Email already exists" },
        { status: 400, headers: corsHeaders }
      );
    }

    const hashedPass = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashedPass });

    return NextResponse.json(
      { success: true, msg: "User registered successfully" },
      { headers: corsHeaders }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, msg: "Server error", err: err.message },
      { status: 500, headers: corsHeaders }
    );
  }
}

// ✅ GET -> Fetch all users
export async function GET() {
  try {
    await connectDB();
    const users = await User.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: users.length,
        data: users,
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
