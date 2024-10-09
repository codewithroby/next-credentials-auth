import { auth } from "@/auth";
import { PROTECTED_ROUTES } from "@/constants/routes";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;
  const isProtectedRoute = PROTECTED_ROUTES.find(
    (route) => route.path === nextUrl.pathname
  );

  if (isProtectedRoute) {
    if (isAuthenticated) {
      const role = req.auth?.user.role ?? -1;
      if (role >= isProtectedRoute.role) {
        return NextResponse.next();
      }
    }
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/login",
    "/register",
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
