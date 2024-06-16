import React from 'react'
import HeaderLayout from '../../layouts/header'
import { Badge, Card, ListGroup } from '~/flowbite-react.module'
import { useLoaderData, useMatches, useParams } from '@remix-run/react'

const ProfileMahasiswaPage = () => {
    const [isVisible, setVisible] = React.useState(false)
    const show = () => {
        setVisible(!isVisible)
    }
    // const profile = useLoaderData();
    // const params = useParams()
    // const matches = useMatches()
    // console.log(matches)
    // // console.log(params)
    // const mahasiswaData = matches.find(
    //   (match) => match.id === 'routes/dashboard.mahasiswa'
    // ).data; 
    // const detail = mahasiswaData.find(mahasiswa => mahasiswa.id === params.id)
    const profile = [
        {
            metadata: 'Nama',
            data: <h1>Fairuz Hibatullah Akbar</h1>
            // <div className='grid grid-cols-2 gap-2'>
            // </div>
        },
        {
            metadata: 'Alamat',
            data: <h1>{isVisible ? 'Komplek Villa Pajajaran Permai' : <Badge className='w-full max-w-24' onClick={show}>Lihat</Badge>}</h1>
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
        {/* <HeaderLayout/> */}
        {/* <div class="flex flex-row justify-center gap-4"> */}
            <div>
                <Card>
                    {/* <div className='w-full max-w-24'>
                        <Badge className='w-full max-w-24' onClick={show}>{isVisible ? 'Hide' : 'Lihat'}</Badge>
                    </div> */}

                    {/* <ListGroup> */}
                        {/* <ListGroup.Item>Alamat: Komplek Villa Pajajaran Permai</ListGroup.Item> */}
                        {/* <ListGroup.Item>{detail.email}</ListGroup.Item> */}
                        {/* <ListGroup.Item>{profile.jurusan}</ListGroup.Item> */}
                        {/* <ListGroup.Item>Program Studi</ListGroup.Item>
                        <ListGroup.Item>Kurikulum</ListGroup.Item>
                        <ListGroup.Item>Sistem Kuliah</ListGroup.Item>
                        <ListGroup.Item>Jenis Pendaftaran</ListGroup.Item>
                        <ListGroup.Item>Tanggal Masuk</ListGroup.Item>
                        <ListGroup.Item>Angkatan</ListGroup.Item> */}
                        {/* <ListGroup.Item>qwgfqwg</ListGroup.Item> */}
                    {/* </ListGroup> */}
            {profile.map((x) => (
                // <ListGroup.Item>
                //      <div className='flex flex-row justify-center'>
                //         <h1 className='basis-1/4'>{x.metadata}</h1>
                //         <div className='basis-1/2'>{x.data}</div>
                //     </div>
                //     {/* {x.data} */}
                // </ListGroup.Item>
                
                <div class="flex">
                    <div class="basis-1/4">
                            {/* <div className='grid grid-cols-2 gap-2'>
                                <div className='col-start-1 col-span-2'>
                                    {isVisible ? <h1> Nama: Fairuz Hibatullah Akbar</h1> : 'xxxxxxxxxxx'}
                                    <h1>Nama:</h1>
                                    <h1 className='flex'>Nama: {isVisible ? 'Fairuz Hibatullah Akbar' : <Badge className='w-full max-w-24' onClick={show}>Lihat</Badge>}</h1>
                                </div>
                                <div className='col-end-7 col-span-1'>
                                    {isVisible ? <Badge onClick={show}>Lihat</Badge> : 'xxxxxxxxxxx'}
                                    <Badge onClick={show}>{isVisible ? 'Hide' : 'Lihat'}</Badge>
                                </div>
                            </div> */}
                        {/* <ListGroup>

                        <ListGroup.Item>
                        </ListGroup.Item>
                        </ListGroup> */}
                        <h1>{x.metadata}</h1>
                    </div>
                    <div class="basis-3/4">
                        <ListGroup>
                            <ListGroup.Item>{x.data}</ListGroup.Item>
                        </ListGroup>
                    </div>
                </div> 

            ))}
                </Card>
            </div>
            {/* <div class="basis-1/4">
                <Card>
                    <div className='flex justify-center'>
                        <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                        <h1>wqfqwf</h1>
                    </div>
                    <div className='w-full max-w-24'>
                        <Badge className='w-full max-w-24' onClick={show}>{isVisible ? 'Hide' : 'Lihat'}</Badge>
                    </div>
                </Card>
            </div>     */}
        {/* </div> */}
    </>
  )
}

export default ProfileMahasiswaPage









{/* <div class="flex flex-row justify-center gap-4">
<div class="basis-1/4">
        <div className='grid grid-cols-2 gap-2'>
            <div className='col-start-1 col-span-2'>
                {isVisible ? <h1> Nama: Fairuz Hibatullah Akbar</h1> : 'xxxxxxxxxxx'}
                <h1>Nama:</h1>
                <h1 className='flex'>Nama: {isVisible ? 'Fairuz Hibatullah Akbar' : <Badge className='w-full max-w-24' onClick={show}>Lihat</Badge>}</h1>
            </div>
            <div className='col-end-7 col-span-1'>
                {isVisible ? <Badge onClick={show}>Lihat</Badge> : 'xxxxxxxxxxx'}
                <Badge onClick={show}>{isVisible ? 'Hide' : 'Lihat'}</Badge>
            </div>
        </div>
    <ListGroup>

    <ListGroup.Item>
    </ListGroup.Item>
    </ListGroup>
</div>
<div class="basis-3/4">
    <ListGroup>

    <ListGroup.Item>Fairuz Hibatullah Akbar</ListGroup.Item>
    </ListGroup>
</div>
</div> */}





{/* <ListGroup>
<div class="flex flex-row justify-center">
    <div class="basis-1/4">
            <div >
                <div >
                    {isVisible ? <h1> Nama: Fairuz Hibatullah Akbar</h1> : 'xxxxxxxxxxx'}
                    <h1>Nama:</h1>
                    <h1 className='flex'>Nama: {isVisible ? 'Fairuz Hibatullah Akbar' : <Badge className='w-full max-w-24' onClick={show}>Lihat</Badge>}</h1>
                </div>
                <div className='col-end-7 col-span-1'>
                    {isVisible ? <Badge onClick={show}>Lihat</Badge> : 'xxxxxxxxxxx'}
                    <Badge onClick={show}>{isVisible ? 'Hide' : 'Lihat'}</Badge>
                </div>
            </div>
        <ListGroup>

        <ListGroup.Item>
        </ListGroup.Item>
        </ListGroup>
    </div>
    <div class="basis-3/4">
        <ListGroup>

        <ListGroup.Item>Fairuz Hibatullah Akbar</ListGroup.Item>
        </ListGroup>
    </div>
</div>

<div class="flex flex-row justify-center">
    <div class="basis-1/4">
            <div>
                <div>
                    {isVisible ? <h1> Nama: Fairuz Hibatullah Akbar</h1> : 'xxxxxxxxxxx'}
                    <h1>Nama:</h1>
                    <h1 className='flex'>Nama: {isVisible ? 'Fairuz Hibatullah Akbar' : <Badge className='w-full max-w-24' onClick={show}>Lihat</Badge>}</h1>
                </div>
                <div className='col-end-7 col-span-1'>
                    {isVisible ? <Badge onClick={show}>Lihat</Badge> : 'xxxxxxxxxxx'}
                    <Badge onClick={show}>{isVisible ? 'Hide' : 'Lihat'}</Badge>
                </div>
            </div>
        <ListGroup>

        <ListGroup.Item>
        </ListGroup.Item>
        </ListGroup>
    </div>
    <div class="basis-3/4">


        <ListGroup.Item>Fairuz Hibatullah Akbar</ListGroup.Item>
     
    </div>
</div>
</ListGroup> */}