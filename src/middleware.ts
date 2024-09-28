import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("Middleware called for path:", req.nextUrl.pathname);

  // Fetch the token to check if the user is authenticated
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log("Token:", token);

  // If no token, redirect to the login page
  if (!token) {
    const loginUrl = new URL("/signin", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url);  // Preserve the original URL for redirect after login
    console.log("Redirecting to:", loginUrl.toString());
    return NextResponse.redirect(loginUrl);
  }

  // Proceed to the requested route if authenticated
  console.log("User authenticated, proceeding to route");
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|signin|register|$).*)'],
};
