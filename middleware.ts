import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const config = {
  matcher: ['/((?!welcome|success|come-back-soon|admin|api|_next/static|_next/image|_ipx|favicon.ico).*)']
}

export async function middleware(req: NextRequest) {

  // if /logout is in the req url, then clear cookies, go to /welcome, and return
  if (req.url.includes('/logout')) {
    const response = NextResponse.redirect(new URL('/welcome', req.url))
    response.cookies.set('next-auth.session-token', '', { maxAge: 0 })
    response.cookies.set('__Secure-next-auth.session-token', '', { maxAge: 0 })
    return response
  }


  const token = await getToken({ req }) as any
  if (!token) {
    return NextResponse.redirect(new URL('/welcome', req.url))
  }

  return NextResponse.next()

}
