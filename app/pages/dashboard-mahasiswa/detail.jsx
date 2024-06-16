import React from 'react'
import { useLoaderData } from "@remix-run/react"
import { Badge, Card, ListGroup } from '~/flowbite-react.module'
import WrapperDashboard from '../../layouts/wrapper-dashboard'
import ButtonComponent from '../../components/button'
import logo from '../../../public/assets/images/Logo_DNBS.jpeg'




const DetailMahasiswaPage = () => {
    const {mahasiswaDetail} = useLoaderData()
    const [isVisible, setVisible] = React.useState(false)
    const show = () => {
        setVisible(!isVisible)
    }
    const profile = [
        {
            metadata: 'Nama',
            data: <h1>{mahasiswaDetail.nama}</h1>
            // <div className='grid grid-cols-2 gap-2'>
            // </div>
        },
        {
            metadata: 'NIM',
            data: <h1>{mahasiswaDetail.nim}</h1>
            // <div className='grid grid-cols-2 gap-2'>
            // </div>
        },
        {
            metadata: 'HP',
            data: <h1>08123456789</h1>
            // <div className='grid grid-cols-2 gap-2'>
            // </div>
        },
        {
            metadata: 'E-mail',
            data: <h1>fha@gmail.com</h1>
            // <div className='grid grid-cols-2 gap-2'>
            // </div>
        },
        {
            metadata: 'Alamat',
            data: <h1>{isVisible ? <h1>{mahasiswaDetail.alamat}</h1> : <Badge className='w-full max-w-24' onClick={show}>Lihat</Badge>}</h1>
        },
        {
            metadata: 'Jurusan',
            data: <h1>Teknik Informatika</h1>
        },
        {
            metadata: 'Sistem Kuliah',
            data: <h1>Eksekutif</h1>
        },
        {
            metadata: 'Jenis Pendaftaran',
            data: <h1>Konversi</h1>
        },
        {
            metadata: 'Tanggal Masuk',
            data: <h1>1-09-2023</h1>
        },
        {
            metadata: 'Angkatan',
            data: <h1>2023</h1>
        }
    ]
    return (
        <>
            <WrapperDashboard>
                <Card>
                    <div className='flex'>
                        <div className='basis-1/4'>
                            <img src={logo} alt="" />
                            <h1>dawwadwad</h1>
                            <h1>dwadwawad</h1>
                            <h1>dwqwqdwdq</h1>
                        </div>
                    <div className='basis-3/4'>
                        {profile.map((x) => (
                            <div class="flex">
                                <div class="basis-1/4">
                                    <h1>{x.metadata}</h1>
                                </div>
                                <div class="basis-3/4">
                                    {/* <h1>{x.data}</h1> */}
                                    {/* <input defaultValue={x.data}/> */}                    
                                    <ListGroup>
                                        <ListGroup.Item>{x.data}</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div> 
                        ))}
                    </div>
                    </div>
                    <ButtonComponent>
                        Update
                    </ButtonComponent>
                </Card>
            </WrapperDashboard>
        </>
    )
}

export default DetailMahasiswaPage