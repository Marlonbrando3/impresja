import { NextResponse } from "next/server";
// import mongoose, { Schema } from "mongoose";
// import { connectMongoDB } from "../libs/mongodb";
import type { NextRequest } from "next/server";
// import Session from "../models/sessions";

// This function can be marked `async` if using `await` inside

export async function middleware(request: NextRequest) {
  const cookie = await request.cookies.get("Admin");

  if (
    request.url.includes("/admin") &&
    cookie?.name === "Admin" &&
    cookie?.value === "12312345678admin"
  ) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin"],
};
