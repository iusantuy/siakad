import { useLocation, useMatches } from '@remix-run/react';
import { Table } from '../../flowbite-react.module'
import WrapperDashboard from '../../layouts/wrapper-dashboard'
import ListMata_Kuliah from './list'
import { Breadcrumb } from 'flowbite-react';
import { HiOutlineHome } from 'react-icons/hi';


const DashboardMata_KuliahPage = ({Mk}) => {
    const matches = useMatches();
    const location = useLocation();
    const pathName = location.pathname.slice(11);
    const tableHeader = [
        {
            id: 1,
            title: 'Kode'
        },
        {
            id: 2,
            title: 'Mata Kuliah'
        },
        {
            id: 3,
            title: 'SKS'
        },
        {
            id: 4,
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

        <Table hoverable>
            <Table.Head>
            {tableHeader.map((x) => (
                <Table.HeadCell key={x.id}>
                    {x.title}
                </Table.HeadCell>
            ))}
            </Table.Head>
                {Mk.map((x) => (
                    <Table.Body className="divide-y">
                        <ListMata_Kuliah
                            id={x.id}
                            kodeMk={x.kodeMk}
                            nama={x.nama}
                            sks={x.sks}
                        />
                    </Table.Body>
                ))}
        </Table>
        </WrapperDashboard>

    )
}

export default DashboardMata_KuliahPage