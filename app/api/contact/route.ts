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




// app/api/contact/route.ts
import { MongoClient } from "mongodb";
import { NextResponse } from 'next/server';

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) throw new Error("Please define MONGO_URI in .env");

// Global type-safe client for dev
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGO_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGO_URI);
  clientPromise = client.connect();
}

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

    const client = await clientPromise;
    const db = client.db("sai_infra");
    const collection = db.collection("contacts");

    const result = await collection.insertOne({ name, email, message, createdAt: new Date() });

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to save message." },
      { status: 500 }
    );
  }
}
