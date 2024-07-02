import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import {NextRequest, NextResponse} from "next/server"


export async function middleware(req) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    const {data:{session}} = await supabase.auth.getSession()

    console.log(session)

    if (!session) {
        return NextResponse.rewrite(new URL('/auth/login', req.url))
    }

    return res
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|auth/login|auth/signup|auth/forgot-password).*)',
    ],
}