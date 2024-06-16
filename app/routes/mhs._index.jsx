import React from 'react'
import HomeMahasiswaPage from '../pages/mahasiswa'
import { getJadwalAkademik } from '../server/jadwal-akademik';
import { json } from '@remix-run/node';
import authenticator from '../server/auth.server';
import { useLoaderData } from '@remix-run/react';
import { getUserFromSession, sessionStorage } from '../server/session.server';

export default function HomeMahasiswa() {
  const data = useLoaderData()
  // console.log(data)
  return (
    <HomeMahasiswaPage JA={data}/>
  )
}

export const meta = () => {
  return [
    { title: "Home | Mahasiswa" },
    { name: "description", content: "Mahasiswa!" },
  ];
}

// export async function action({request}) {
//   await authenticator.logout(request, {
//     redirectTo: "/login"
//   })
// }

export async function loader({params, request}) {
  // await authenticator.isAuthenticated(request, {
  //   failureRedirect: "/login"
  // })
  // const jadwalAkademikId = params.id
  // await getUserFromSession(request)

  // await authenticator.isAuthenticated(request, {
  //   // successRedirect: "/mhs",
  //   failureRedirect: "/login"
  // })

  // const session = await sessionStorage.getSession(
  //   request.headers.get("Cookie")
  // )

  
  // const userId = session.get('userId')
  
  // const userId = await getUserFromSession()
  
  // const userId = await getSession(request.headers.get('Cookie'))
  // const sessionData = await userId.get('userId')
  // console.log(userId.data)
  
  // const error = session.get("sessionErrorKey")
  // const sessionData = session.get(authenticator.sessionKey)
  // // const jadwalAkademik = await getJadwalAkademik()
  // const jadwalAkademikId = params.id
  // const jadwalAkademik = await getJadwalAkademik(jadwalAkademikId)
  return json({})
  // return userId
}
