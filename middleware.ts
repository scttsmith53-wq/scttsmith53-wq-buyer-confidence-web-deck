import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Custom login is intentionally disabled.
// Use AWS Amplify Access Control / password protection instead.
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
