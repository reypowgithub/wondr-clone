import db from "../../../app/data/db.json";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dbFilePath = path.join(process.cwd(), "db.json");

export async function GET() {
  return NextResponse.json(db.promotions);
}

export async function POST(request) {
  const newPromotion = await request.json();
  db.promotions.push(newPromotion);

  fs.WriteFile(dbFilePath, JSON.stringify(dbm, null, 2));

  return NextResponse.json(
    { message: "Promo created successfully", data: newPromotion },
    { status: 201 }
  );
}
