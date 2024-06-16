import DashboardRuangPage from "../pages/dashboard-ruang";





export default function Ruang() {
    return (
        <DashboardRuangPage/>
    )
}

export const meta = () => {
    return [
      { title: "Dashboard | Mahasiswa" },
      { name: "description", content: "Data Mahasiswa" },
    ]
}

export const handle = {
    breadcrumb: () => (
      <>
        <h1>Dashboard</h1>
      </>
    )
  }