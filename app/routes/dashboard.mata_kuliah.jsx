import { json } from "@remix-run/node";
import DashboardMata_KuliahPage from "../pages/dashboard-mata_kuliah";
import { addMK, getMK } from "../server/matakuliah.server";
import { useLoaderData } from "@remix-run/react";







export default function Mata_Kuliah() {
    const { mk } = useLoaderData()
    return (
        <DashboardMata_KuliahPage Mk={mk}/>
    )
}

export const meta = () => {
    return [
      { title: "Dashboard | Mata Kuliah" },
      { name: "description", content: "Data Mata Kuliah" },
    ]
  }
  
  export async function action({request}) {
    try {       
        const headers = await putToast()
        const formData = await request.formData()
        const mahasiswaData = Object.fromEntries(formData)
        await addMK(mahasiswaData)
        return redirect('/dashboard/mata_kuliah', { headers })
    } catch (e) {
        console.log(e)
        throw e
    }
  }
  
  export async function loader({ params, request }) {
    const mkId = params.id
    const mk = await getMK(mkId)
    // const { toast, headers } = await popToast(request)
    return json({ mk })
  }
  
  export const handle = {
    breadcrumb: () => (
      <>
        <h1>Dashboard</h1>
      </>
    )
  }

