// import { MongoClient } from "mongodb";

// // Read MongoDB URI from environment variable
// const MONGO_URI = process.env.MONGO_URI;

// // Connect to MongoDB
// let client;
// let clientPromise;

// if (!MONGO_URI) {
//   throw new Error("Please define the MONGO_URI in your .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   // In dev mode, use a global variable to preserve the client across hot reloads
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(MONGO_URI);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production, create a new client
//   client = new MongoClient(MONGO_URI);
//   clientPromise = client.connect();
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, message } = body;

//     if (!name || !email || !message) {
//       return new Response(JSON.stringify({ error: "All fields are required." }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     const client = await clientPromise;
//     const db = client.db("sai_infra"); // Database name
//     const collection = db.collection("contacts"); // Collection name

//     const result = await collection.insertOne({ name, email, message, createdAt: new Date() });

//     return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error(err);
//     return new Response(JSON.stringify({ error: "Failed to save message." }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }



import { NextResponse } from "next/server";

// --- Mocks to make this file runnable in a single context ---
// In a real project, these would be in separate files.
const mongoose = {
  connection: {
    readyState: 1, // 1 is connected
  },
  connect: () => Promise.resolve(),
};
const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Using existing database connection");
    return;
  }
  await mongoose.connect();
  console.log("New database connection established");
};

class Contact {
  name: string;
  email: string;
  message: string;
  _id: string;

  constructor(data: { name: string, email: string, message: string }) {
    this.name = data.name;
    this.email = data.email;
    this.message = data.message;
    this._id = `mock-id-${Date.now()}`;
  }

  save() {
    console.log("Mock save successful", this);
    return Promise.resolve(this);
  }
}
// --- End of mocks ---

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

    // Connect to MongoDB
    await connectToDatabase();

    // Create and save new contact
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
