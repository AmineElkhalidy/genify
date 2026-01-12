import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/api/webhook"]);

const clerkAuth = clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export async function proxy(request: NextRequest) {
  // Mock NextFetchEvent as it's not provided in proxy() but required by clerkMiddleware
  const event = {
    waitUntil: () => {},
    sourcePage: "proxy"
  } as unknown as NextFetchEvent;
  
  const result = await clerkAuth(request, event);
  return result || NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
