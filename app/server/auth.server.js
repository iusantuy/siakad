import { redirect } from '@remix-run/node'
import bcrypt from 'bcryptjs'
// const bcryptjs = require( 'bcryptjs')
import { prisma } from './db.server'
import createUserSession, { getUserFromSession, sessionStorage } from './session.server'
import { FormStrategy } from 'remix-auth-form'
import { Authenticator } from 'remix-auth'

// const SESSION_SECRET = process.env.SESSION_SECRET

export async function register({username, password}) {
    // const userExist = await prisma.user.findFirst({where: {email}})
    // const userExist = await mdb.findOne({email: {email}})

    const userExist = await prisma.user.findFirst({where: {username}})

    if (userExist) {
        const error = new Error(
            'User terdaftar'
        )
        error.status = 422;
        throw error
    }

    const passwordHash = await hash(password, 12)

    await prisma.user.create({
        username: username,
        password: passwordHash
    })

    // if (!userExist) {
    //     const error = new Error(
    //         'Please check the provided credentials'
    //     )
    //     error.status = 401
    //     throw error
    // }

    // const passwordCorrect = await compare(password, userExist.password)
    const passwordCorrect = await password

    if (!passwordCorrect) {
        const error = new Error(
            'Please check the provided credentials'
        )
        error.status = 401
        throw error
    }

    return createUserSession(userExist.id, '/home')
}

export async function loginAdmin({username, password}) {
    // const userExist = await prisma.user.findFirst({where: {email}})
    // const userExist = await mdb.findOne({email: {email}})

    // const adminExist = await prisma.admin.findFirst({where: {username}})
    // const dosenExist = await prisma.dosen.findFirst({where: {username}})
    // const mahasiswaExist = await prisma.mahasiswa.findFirst({where: {username}})
    
    const userExist = await prisma.admin.findFirst({where: {username}})
    if (!userExist) {
        const error = new Error(
            'Please check the provided credentials'
        )
        error.status = 401
        throw error
    }

    const passwordCorrect = await bcrypt.compare(password, userExist.password)
    // const passwordCorrect = await password

    if (!passwordCorrect) {
        const error = new Error(
            'Please check the provided credentials'
        )
        error.status = 401
        throw error
    }

    // return createUserSession(userExist.id, '/dashboard')
}

export async function loginDosen({username, password}) {
    // const userExist = await prisma.user.findFirst({where: {email}})
    // const userExist = await mdb.findOne({email: {email}})

    // const adminExist = await prisma.admin.findFirst({where: {username}})
    // const dosenExist = await prisma.dosen.findFirst({where: {username}})
    // const mahasiswaExist = await prisma.mahasiswa.findFirst({where: {username}})
    
    const userExist = await prisma.dosen.findFirst({where: {username}})
    if (!userExist) {
        const error = new Error(
            'Please check the provided credentials'
        )
        error.status = 401
        throw error
    }

    const passwordCorrect = await bcrypt.compare(password, userExist.password)
    // const passwordCorrect = await password

    if (!passwordCorrect) {
        const error = new Error(
            'Please check the provided credentials'
        )
        error.status = 401
        throw error
    }

    // return createUserSession(userExist.id, '/dashboard')
}

export async function loginMahasiswa({username, password}) {
    // const userExist = await prisma.user.findFirst({where: {email}})
    // const userExist = await mdb.findOne({email: {email}})

    // const adminExist = await prisma.admin.findFirst({where: {username}})
    // const dosenExist = await prisma.dosen.findFirst({where: {username}})
    // const mahasiswaExist = await prisma.mahasiswa.findFirst({where: {username}})
    
    const userExist = await prisma.Mahasiswa.findFirst({where: {username}})
    if (!userExist) {
        const error = new Error(
            'Please check the provided credentials'
        )
        error.status = 401
        throw error
    }

    const passwordCorrect = await bcrypt.compare(password, userExist.password)
    // const passwordCorrect = await password

    if (!passwordCorrect) {
        const error = new Error(
            'Please check the provided credentials'
        )
        error.status = 401
        throw error
    }

    // switch (userExist.role) {
    //     case 'ADMIN':
    //         // return createUserSession(userExist.id, '/dashboard')
    //         createUserSession(userExist.id, '/dashboard')
    //         return redirect('/dashboard')
    //     case 'DOSEN':
    //         // return createUserSession(userExist.id, '/dosen')
    //         createUserSession(userExist.id, '/dosen')
    //         return redirect('/dosen')
    //     case 'MAHASISWA':
    //         // return createUserSession(userExist.id, '/mhs')
    //         createUserSession(userExist.id, '/mhs')
    //         return redirect('/mhs')     
    //         // break;
    //     default:
    //         redirect('/login');
    // }

    // return createUserSession(userExist.id)

    // if (userExist.role === 'ADMIN') {
    //     return redirect('/dashboard')
    // }

    return createUserSession(userExist.id, '/mhs')
}

export async function loginUser({username, password}) {
    // const userExist = await prisma.user.findFirst({where: {email}})
    // const userExist = await mdb.findOne({email: {email}})

    // const adminExist = await prisma.admin.findFirst({where: {username}})
    // const dosenExist = await prisma.dosen.findFirst({where: {username}})
    // const mahasiswaExist = await prisma.mahasiswa.findFirst({where: {username}})
    
    const userExist = await prisma.user.findUnique({
        where: {username},
        include: {admin: true, dosen: true, mahasiswa: true}
    })
    if (!userExist) {
        const error = new Error(
            'Please check the provided credentials'
        )
        error.status = 401
        throw error
    }

    const passwordCorrect = await bcrypt.compare(password, userExist.password)
    // const passwordCorrect = await password

    if (!passwordCorrect) {
        const error = new Error(
            'Please check the provided credentials'
        )
        error.status = 401
        throw error
    }

    // switch (userExist.role) {
    //     case 'ADMIN':
    //         return createUserSession(userExist.id, '/dashboard')
    //         // redirect('/dashboard')
    //     case 'DOSEN':
    //         return createUserSession(userExist.id, '/dosen')
    //         // redirect('/dosen')
    //     case 'MAHASISWA':
    //         return createUserSession(userExist.id, '/mhs')
    //         // redirect('/mhs')     
    //         // break;
    //     default:
    //         redirect('/login');
    // }

    // return createUserSession(userExist.id)

    // if (userExist.role === 'ADMIN') {
    //     return redirect('/dashboard')
    // }

    // return createUserSession(userExist.id, '/mhs')
}

// export async function login({username, password}) {
//     // const userExist = await prisma.user.findFirst({where: {email}})
//     // const userExist = await mdb.findOne({email: {email}})

//     // const adminExist = await prisma.admin.findFirst({where: {username}})
//     // const dosenExist = await prisma.dosen.findFirst({where: {username}})
//     // const mahasiswaExist = await prisma.mahasiswa.findFirst({where: {username}})
    
//     const userExist = await prisma.admin.findFirst({where: {username}})
//     if (!userExist) {
//         const error = new Error(
//             'Please check the provided credentials'
//         )
//         error.status = 401
//         throw error
//     }

//     const passwordCorrect = await bcrypt.compare(password, userExist.password)
//     // const passwordCorrect = await password

//     if (!passwordCorrect) {
//         const error = new Error(
//             'Please check the provided credentials'
//         )
//         error.status = 401
//         throw error
//     }

//     // return createUserSession(userExist.id, '/dashboard')
// }

export async function logout(request) {
    const session = await sessionStorage.getSession(
        request.headers.get('Cookie')
    )
    return redirect('/login', {
        headers: {
            'Set-Cookie': await sessionStorage.destroySession(session)
        }
    })
    // sessionStorage.destroySession(session)
}

// export let authenticator = new Authenticator(sessionStorage)
// authenticator.use(
//     new FormStrategy(async ({form}) => {
//         let username = form.get("username")
//         let password = form.get("password")
//         let user = await loginMahasiswa(username, password)
//         return user
//     }),
//     "user-pass"
// )

const authenticator = new Authenticator(sessionStorage, {
    sessionKey: "userId",
    sessionErrorKey: 'sessionErrorKey'
})

authenticator.use(
    new FormStrategy(async ({form}) => {
        let username = form.get('username')
        let password = form.get('password')
        try {
            const login = await loginUser({username, password})
            // const loginUser = await loginUser({username, password})
            // const {nama, id} = login.data
            // return {nama, userId: id}  
            // await getUserFromSession()
            return login
        } catch (e) {
            console.log(e)
            throw e
        }
    })
) 

export default authenticator