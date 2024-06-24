import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

 const isProtectRoute = createRouteMatcher(['/setting(.*)']);

export default clerkMiddleware((auth, request) => {
  if(isProtectRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};