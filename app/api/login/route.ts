import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");

  const expectedUsername = process.env.DECK_USERNAME || "scott";
  const expectedPassword = process.env.DECK_PASSWORD || "ChangeThisBeforeDeploying!";
  const accessToken = process.env.DECK_ACCESS_TOKEN || "dev-token";

  if (username !== expectedUsername || password !== expectedPassword) {
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
