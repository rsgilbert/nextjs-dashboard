import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// protected routes will not even start rendering until the middleware verifies the authentication

export default NextAuth(authConfig).auth;

export const config = {
      // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}