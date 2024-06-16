import { Breadcrumb } from "flowbite-react"
import WrapperDashboard from "../../layouts/wrapper-dashboard"
import { useLocation, useMatches } from "@remix-run/react";
import { HiOutlineHome } from "react-icons/hi";
import { Table } from "../../flowbite-react.module"
import ButtonComponent from "../../components/button";




const DashboardRuangPage = () => {
    const matches = useMatches();
    const location = useLocation();
    const pathName = location.pathname.slice(11);
    const tableHeader = [
        {
            id: 1,
            title: 'Nama'
        },
        {
            id: 2,
            title: 'Action'
        }
    ]
    return (
        <WrapperDashboard>
            {matches.filter(
                (match) => 
                match.handle && match.handle.breadcrumb
            ).map((match, index) => (
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item key={index} href="/dashboard" icon={HiOutlineHome}>
                        {match.handle.breadcrumb(match)}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className='capitalize'>{pathName}</Breadcrumb.Item>
                </Breadcrumb>
                ))
            }
            <ButtonComponent onClick={() => setOpenModal(true)} gradientDuoTone='purpleToBlue'>+Buat data</ButtonComponent>
            <Table hoverable>
                <Table.Head>
                    {tableHeader.map((x) => (
                        <Table.HeadCell key={x.id}>
                            {x.title}
                        </Table.HeadCell>
                    ))}
                </Table.Head>
                    {/* {ruang.map((x) => (
                        <Table.Body className="divide-y">
                        <ListRuang
                            id={x.id}
                            kode={x.kode}
                            nama={x.nama}
                        />
                        </Table.Body>
                    ))} */}
            </Table>
        </WrapperDashboard>
    )
}

export default DashboardRuangPage

