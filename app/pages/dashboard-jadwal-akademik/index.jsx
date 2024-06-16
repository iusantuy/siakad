import { Form, Link, useMatches } from "@remix-run/react";
import WrapperDashboard from "../../layouts/wrapper-dashboard"
import { Breadcrumb, Button, Table, TextInput } from "flowbite-react";
import ListJadwalAkademik from "./list";
import { HiOutlineHome } from "react-icons/hi";
import ButtonComponent from "../../components/button";



const JadwalAkademikPage = ({jadwal_akademik}) => {
    const matches = useMatches();
    const x = [
        // {
        //     id: 0,
        //     title: 'Id'
        // },
        {
            id: 1,
            title: 'Judul'
        },
        {
            id: 2,
            title: 'Tanggal'
        },
        {
            id: 3,
            title: 
            <span className="sr-only">Edit</span>
        }
        // {
        //     id: 3,
        //     title: 'Kelas'
        // },
        // {
        //     id: 4,
        //     title: 'Semester'
        // },
      ]
    return (
        <WrapperDashboard>
            <div className="overflow-x-auto">
                {matches.filter(
                    (match) => 
                    match.handle && match.handle.breadcrumb
                ).map((match, index) => (
                    <Breadcrumb aria-label="Default breadcrumb example">
                        <Breadcrumb.Item key={index} href="#" icon={HiOutlineHome}>
                        {match.handle.breadcrumb(match)}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Jadwal Akademik</Breadcrumb.Item>
                    </Breadcrumb>
                ))
                }

                <div className="flex justify-between my-5">
                    <div className='self-center'>
                    <Form onChange={(event) =>
                        submit(event.currentTarget)
                    }>
                        {/* <TextInput id="q" type="text" placeholder="Cari mata kuliah" required sizing='sm' addon='MK' defaultValue={q || ''}/> */}
                    </Form>
                    {/* <Button gradientDuoTone='purpleToBlue'>Cari</Button> */}
                    </div>

                    <div className='mx-1'>
                        <Link to='/dashboard/jadwal-akademik/create'>
                            <ButtonComponent>+Buat data jadwal akademik</ButtonComponent>
                        </Link>   
                    </div>
                </div>

                <Table hoverable>
                    <Table.Head>
                        {x.map((y) => (
                            <Table.HeadCell key={y.id}>
                                {y.title}
                            </Table.HeadCell>
                        ))}
                    </Table.Head>
                        {jadwal_akademik.map((x) => (
                            <Table.Body className="divide-y">
                                <ListJadwalAkademik
                                    id={x.id}
                                    judul={x.judul}
                                    tanggal={x.tanggal}
                                />
                            </Table.Body>
                        ))}
                </Table>
            </div>
        </WrapperDashboard>
    )
}

export default JadwalAkademikPage