import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongoose";
import Contact from "@/lib/models/Contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const contact = new Contact({ name, email, message });
    await contact.save();

    return NextResponse.json(
      { success: true, id: contact._id },
      { status: 201 }
    );
  } catch (err) {
    console.error("MongoDB error:", err);
    return NextResponse.json(
      { error: "Failed to save message." },
      { status: 500 }
    );
  }
}
