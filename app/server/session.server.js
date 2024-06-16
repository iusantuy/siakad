import { createCookieSessionStorage, redirect } from '@remix-run/node'

const SESSION_SECRET = process.env.SESSION_SECRET
// const COOKIE_AGE = process.env.COOKIE_AGE
export const sessionStorage = createCookieSessionStorage({
    cookie: {
        // secure: false,
        secure: process.env.NODE_ENV = 'production',
        secrets: [SESSION_SECRET],
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60,
        httpOnly: true
    }
})

export default async function createUserSession(userId, redirectPath, request) {
    const session = await sessionStorage.getSession(
        // request.headers.get('Cookie')
    )
    session.set('userId', userId)
    return redirect(redirectPath, {
        headers: {
            'Set-Cookie': await sessionStorage.commitSession(session)
        }
    })
}

export async function getUserFromSession(request) {
    const session = await sessionStorage.getSession(
        request.headers.get('Cookie')
    )

    const userId = session.get('userId')
    // const userRole = session.get('userRole')
    
    if (!userId) {
        return null
    }

    return userId
}

export async function requireUserSession(request) {
    const userId = getUserFromSession(request)
    if (!userId) {
        throw redirect('/?mode=login')
    }
}

export let { getSession, commitSession, destroySession } = sessionStorage