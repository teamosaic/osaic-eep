import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const config = {
  matcher: ['/((?!welcome|success|come-back-soon|admin|api|_next/static|_next/image|_ipx|favicon.ico).*)']
}

export async function middleware(req: NextRequest) {

  const token = await getToken({ req }) as any
  if (!token) {
    return NextResponse.redirect(new URL('/welcome', req.url))
  }

  return NextResponse.next()

}
