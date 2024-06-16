import { createCookieSessionStorage } from '@remix-run/node'

export const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
        name: 'toast'
        // secure: false,
        // secure: process.env.NODE_ENV = 'production',
        // secrets: [SESSION_SECRET],
        // sameSite: 'strict',
        // maxAge: 30 * 24 * 60 * 60,
        // httpOnly: true
    }
})

export async function putToast(toast, headers = new Headers()) {
    const session = await getSession()
    session.flash('toast', toast)
    headers.set('Set-Cookie', await commitSession(session))
    return headers
}

export async function popToast(request, headers = new Headers()) {
    const session = await getSession(request.headers.get('Cookie'))
    const toast = (session.get('toast') ?? null)
    headers.set('Set-Cookie', await commitSession(session))
    return { toast, headers }
}