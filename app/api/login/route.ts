import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "").trim();

  // Temporary hard-coded login so we can prove the app works.
  const expectedUsername = "scott";
  const expectedPassword = "test12345";
  const accessToken = "temporary-private-deck-token";

  if (username.toLowerCase() !== expectedUsername || password !== expectedPassword) {
    return new NextResponse(null, {
      status: 303,
      headers: {
        Location: "/login?error=1"
      }
    });
  }

  const response = new NextResponse(null, {
    status: 303,
    headers: {
      Location: "/"
    }
  });

  response.cookies.set("deck_auth", accessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 12
  });

  return response;
}
