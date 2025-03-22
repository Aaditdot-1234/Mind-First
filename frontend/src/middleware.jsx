// import { NextResponse } from 'next/server'
// import { auth } from './auth';
 
// export async function middleware(request) {
    
//     const session = await auth(); 

//     if (session){
//         return NextResponse.next();    
//     }

//     return NextResponse.redirect(new URL('/', request.url))
// }
 
// export const config = {
//   matcher: ['/testpage/:path*','/recommendation/:path*'],
// }

import { NextResponse } from 'next/server';
import { auth } from './auth';

export async function middleware(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    const session = await auth();

    if (pathname.startsWith('/testpage') || pathname.startsWith('/recommendation') || pathname.startsWith('/Profile')) {
        if (!session) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    if (pathname.match(/^\/testpage\/(depression|anxiety|stress|bipolar|ptsd|ocd|adhd)/)) {
        const prescreeningCompleted = request.cookies.get("prescreeningCompleted");

        if (!prescreeningCompleted) {
            return NextResponse.redirect(new URL('/Prescreening', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/testpage/:path*', '/recommendation/:path*', '/Profile/:path*'],
};
