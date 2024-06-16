import React from 'react'
import LoginPage from '~/pages/login'
import { login, loginMahasiswa } from '../server/auth.server';
import { validate } from '../server/validation.server';
import { json, redirect } from '@remix-run/node';
import authenticator from '../server/auth.server'
import { getUserFromSession, sessionStorage } from '../server/session.server';
import { useLoaderData } from '@remix-run/react';

export default function Login() {
  const data = useLoaderData()
  console.log(data)
  return (
    <LoginPage/>
  )
}

export const meta = () => {
    return [
      { title: "Login | STMIK Dharma Negara" },
      { name: "description", content: "Login!" },
    ];
  };

export async function action({request, context}) {
  // const session = await sessionStorage.getSession(
  //   request.headers.get("Cookie")
  // )
  // role = session.get('role')
  // let redirectTo;
  // switch (role) {
  //   case ADMIN:
  //     redirectTo = '/dashboard'
  //     break;
  //   case DOSEN:
  //     redirectTo = '/dosen'
  //     break;
  //   case MAHASISWA:
  //     redirectTo = '/mhs'
  //     break
  //   default:
  //     break;
  // }
  // const role = await getUser()
  // const loginn = async () => {
  //   switch (key) {
  //     case 'ADMIN':
  //       const admin = await authenticator.authenticate("form", request, {
  //         successRedirect: "/dashboard",
  //         failureRedirect: "/login",
  //         throwOnError: true,
  //         context
  //       })
  //       return admin
  //     case 'DOSEN':
  //       const dosen = await authenticator.authenticate("form", request, {
  //         successRedirect: "/dosen",
  //         failureRedirect: "/login",
  //         throwOnError: true,
  //         context
  //       })
  //       return dosen
  //     case 'MAHASISWA':
  //       const mhs = await authenticator.authenticate("form", request, {
  //         successRedirect: "/mhs",
  //         failureRedirect: "/login",
  //         throwOnError: true,
  //         context
  //       })
  //         return mhs
  //       break;
    
  //     default:
  //       break;
  //   }
  // }

  // return loginn

  const login = await authenticator.authenticate("form", request, {
    successRedirect: 'mhs',
    failureRedirect: "/login",
    throwOnError: true,
    context
  })

  // await getUserFromSession()
  return login
    // const formData = await request.formData()
    // const username = formData.get('username')
    // const password = formData.get('password')

    // if (typeof username !== string) {
    //   return json({error: 'Invalid Form Data'}, {status: 400})
    // }

    // const credentials = Object.fromEntries(formData)
    // try {        
    //     validate(credentials)
    // } catch (e) {
    //     return e
    // }

    // switch (request) {
    //   case ADMIN:
    //     return loginAdmin(credentials)
    //   case DOSEN:
    //     return loginDosen(credentials)
    //   case MAHASISWA:
    //     return loginMahasiswa(credentials)
    //   default:
    //     return <div>Error</div>
    // }

    // return await authenticator.authenticate("user-pass", request, {
    //   successRedirect: "/mhs",
    //   failureRedirect: "/login"
    // })
    
    // await loginMahasiswa(username, password)
    // return redirect('/mhs')
  }
  
  export async function loader({request}) {
    return null
  //   const session = await sessionStorage.getSession(
  //     request.headers.get("Cookie")
  //   )
  //   role = session.get('role')
  // let redirectTo;
  // switch (role) {
  //   case ADMIN:
  //     redirectTo = '/dashboard'
  //     break;
  //   case DOSEN:
  //     redirectTo = '/dosen'
  //     break;
  //   case MAHASISWA:
  //     redirectTo = '/mhs'
  //     break
  //   default:
  //     break;
  // }

  // const session = await sessionStorage.getSession(
  //   request.headers.get("Cookie")
  // )

  // await authenticator.isAuthenticated(request, {
  //   successRedirect: 'mhs'
  // })


  // const getSession = await getUserFromSession(request)

  // return getSession

  // const error = session.get(authenticator.sessionKey)
  // const sessionData = session.get(authenticator.sessionKey)
  // return json(session, error, sessionData)
}

// export async function loader({request}) {
//   return await authenticator.isAuthenticated(request, {
//     successRedirect: "/mhs"
//   })
// }