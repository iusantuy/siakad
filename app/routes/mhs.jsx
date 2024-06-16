import React from 'react'
import HomeMahasiswaPage from '~/pages/mahasiswa'
import HeaderLayout from '../layouts/header'
import { Outlet, useLoaderData } from '@remix-run/react'
import Wrapper from '../layouts/wrapper'
import { getJadwalAkademik } from '../server/jadwal-akademik'
import { json } from '@remix-run/node'
import authenticator, { logout } from '../server/auth.server'
import { getMahasiswa, getMahasiswaId } from '../server/mahasiswa.server'
import { getSession, getUserFromSession, sessionStorage } from '../server/session.server'
// import ProfileMahasiswaPage from ''

export default function Mhs() {
  const { data } = useLoaderData()
  console.log(data)
  return (
    <>
        <HeaderLayout/>
        <Wrapper>
          <Outlet/>
        </Wrapper>
        {/* <HomeMahasiswaPage/> */}
    </>
  )
}

export async function action({request}) {
  await authenticator.logout(request, {
    redirectTo: "/login"
  })
  // const logout = await logout()
  // return logout
}

export async function loader({request}) {
  //  const data = await authenticator.isAuthenticated(request, {
  //   // successRedirect: "/mhs",
  //   failureRedirect: "/login"
  // })

  // const session = await sessionStorage.getSession(
  //   request.headers.get("Cookie")
  // )

  // // const userId = session.get('userId')

  // const userId = await getUserFromSession(request)

  // // const userId = await getSession(request.headers.get('Cookie'))
  // // const sessionData = await userId.get('userId')
  // // console.log(userId)

  // const error = session.get(authenticator.sessionKey)
  // const sessionData = session.get(authenticator.sessionKey)
  return json({})
  // return userId
  // return sessionData

  // const mahasiswaId = params.id
  // const mahasiswa = await getMahasiswa(mahasiswaId)
  // return mahasiswa
}

// export async function loader() {
//   // const jadwalAkademikId = params.id
//   const jadwalAkademik = await getJadwalAkademik()
//   return json({jadwalAkademik})
// }

// export async function loader({params}) {
//     const mahasiswaId = params.id
//     const mahasiswa = await getMahasiswa(mahasiswaId)
//     return mahasiswa
//   }

// export default home