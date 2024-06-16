import { Outlet } from '@remix-run/react'
import React from 'react'
// import Layout from '~/layouts/index'
import SidebarLayout from '~/layouts/sidebar'
import authenticator from '../server/auth.server'
import { sessionStorage } from '../server/session.server'
import { json } from '@remix-run/node'

export default function Dashboard() {
  return (
    <>
    {/* <Layout/> */}
    <SidebarLayout/>
    <Outlet/>
    </>
  )
}

export const meta = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Dashboard DNBS" },
  ]
}

export async function action({request}) {
  await authenticator.logout(request, {
    redirectTo: "/login"
  })
}

export async function loader({request}) {
  // await authenticator.isAuthenticated(request, {
  //   // successRedirect: "/dashboard"
  //   failureRedirect: "/login"
  // })

  // const session = await sessionStorage.getSession(
  //   request.headers.get("Cookie")
  // )

  // const error = session.get("sessionErrorKey")
  return json({})
}



// import React from 'react'
// import MahasiswaComponent from '../../components/mahasiswa/mahasiswa'
// import HeaderLayout from '../../layouts/header'
// import SidebarLayout from '../../layouts/Sidebar'
// import FooterLayout from '../../layouts/footer'
// import { Outlet } from '@remix-run/react'

// const home = () => {
//   return (
//     <>
//   <HeaderLayout/>
//   <SidebarLayout>

//   <Outlet/>
//   </SidebarLayout>
//   <FooterLayout/>
//   </>
//   )
// }

// export default home


// // import React from 'react'
// // import HeaderLayout from '../layouts/header'
// // import SidebarLayout from '../layouts/Sidebar'
// // import FooterLayout from '../layouts/footer'
// // import { Outlet } from '@remix-run/react'
// // // import { requireUserSession } from '../server/session.server'

// // const Home = () => {
// //   return (
// //     <>
// //         <HeaderLayout/>
// //         <SidebarLayout/>
// //         <FooterLayout/>
// //         <Outlet/>
// //     </>
// //   )
// // }

// // // export async function loader({request}) {
// // //     await requireUserSession(request)
// // // }

// // export default Home

// import React from 'react'
// import Layout from '../layouts'

// const home = () => {
//   return (
//     <Layout/>
//   )
// }

// export default home








