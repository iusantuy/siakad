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
  const login = await authenticator.authenticate("form", request, {
    successRedirect: "/mhs",
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
  await authenticator.isAuthenticated(request, {
    successRedirect: "/mhs"
  })

  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  )

  // const getSession = await getUserFromSession(request)

  // return getSession

  const error = session.get(authenticator.sessionKey)
  const sessionData = session.get(authenticator.sessionKey)
  return json(session, error, sessionData)
}

// export async function loader({request}) {
//   return await authenticator.isAuthenticated(request, {
//     successRedirect: "/mhs"
//   })
// }




















// import type { MetaFunction } from "@remix-run/node";
// import Login from '../pages/login'
// import { Outlet } from "@remix-run/react";
// import Layout from '~/layouts/index'

// export default function Index() {
//   return (
//     // <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
//     //   <h1>Welcome to Remix</h1>
//     //   <ul>
//     //     <li>
//     //       <a
//     //         target="_blank"
//     //         href="https://remix.run/tutorials/blog"
//     //         rel="noreferrer"
//     //       >
//     //         15m Quickstart Blog Tutorial
//     //       </a>
//     //     </li>
//     //     <li>
//     //       <a
//     //         target="_blank"
//     //         href="https://remix.run/tutorials/jokes"
//     //         rel="noreferrer"
//     //       >
//     //         Deep Dive Jokes App Tutorial
//     //       </a>
//     //     </li>
//     //     <li>
//     //       <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
//     //         Remix Docs
//     //       </a>
//     //     </li>
//     //   </ul>
//     // </div>
// <>
// {/* <Outlet/>
// <Layout/> */}
// {/* <Login/> */}
// </>
//   );
// }

// export const meta: MetaFunction = () => {
//   return [
//     { title: "Home" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };
