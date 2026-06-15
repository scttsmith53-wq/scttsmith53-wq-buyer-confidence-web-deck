import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = NextResponse.redirect(new URL("/login", request.url), 302);
  response.cookies.set("deck_auth", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0
  });
  return response;
}
