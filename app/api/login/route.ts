import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");

  const expectedUsername = process.env.DECK_USERNAME || "scott";
  const expectedPassword = process.env.DECK_PASSWORD || "ChangeThisBeforeDeploying!";
  const accessToken = process.env.DECK_ACCESS_TOKEN || "dev-token";

  if (username !== expectedUsername || password !== expectedPassword) {
    return NextResponse.redirect(new URL("/login?error=1", request.url), 302);
  }

  const response = NextResponse.redirect(new URL("/", request.url), 302);
  response.cookies.set("deck_auth", accessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12
  });

  return response;
}
