import { withAuth } from "next-auth/middleware";
import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { localePrefix, locales } from './navigation';
 
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix
});

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export default function middleware(req: NextRequest) {
  // const excludePattern = "^(/(" + locales.join("|") + "))?/admin/?.*?$";
  // const publicPathnameRegex = RegExp(excludePattern, "i");
  // const isPublicPage = !publicPathnameRegex.test(req.nextUrl.pathname);

  // if (isPublicPage) {
  //   return intlMiddleware(req);
  // } else {
  //   return (authMiddleware as any)(req);
  // }
  return (authMiddleware as any)(req);
}


export const config = {
  // Skip all paths that should not be internationalized
  // matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
  matcher: ['/', '/(zh-tw|en)/:path*']
};