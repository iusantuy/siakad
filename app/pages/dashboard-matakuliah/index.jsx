import React from 'react'
import { Breadcrumb, Button, Pagination, Table, TextInput } from 'flowbite-react'
import { HiOutlineHome, HiOutlineLockClosed, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';
// import Wrapper from '../../layouts/wrapper'
import { Form, Link, useLoaderData, useLocation, useMatches, useSearchParams, useSubmit } from '@remix-run/react';
import ListMataKuliah from './list';
import WrapperDashboard from '../../layouts/wrapper-dashboard';
import ButtonComponent from '../../components/button';

const DashboardMataKuliahPage = ({ mk }) => {
  const matches = useMatches();
  const location = useLocation();
  const pathName = location.pathname.slice(11);
  const {matakuliah, q} = useLoaderData()
  const submit = useSubmit()

  React.useEffect(() => {
    const searchField = document.getElementById('q')
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || ''
    }
  }, [q])

  const [searchParams] = useSearchParams()
  // const matches = useMatches();
  const [currentPage, setCurrentPage] = React.useState(1)
  // const onPageChange = (page) => setCurrentPage(page)
  const onPageChange = searchParams.get('page')
  // const find = () => {
  //   return (
  //     <Link to='/home'>
  //       <h1>adad</h1>
  //     </Link>
  //   )
  // }
  const x = [
    // {
    //     id: 0,
    //     title: 'Id'
    // },
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
      {/* <h1>{total}</h1> */}
        <div className="overflow-x-auto">
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

          <div className="flex justify-between my-5">
            <div className='self-center'>
              <Form onChange={(event) =>
                submit(event.currentTarget)
              }>
                <TextInput id="q" type="text"  rightIcon={HiOutlineSearch} placeholder="Cari mata kuliah" required sizing='sm' addon='MK' defaultValue={q || ''}/>
              </Form>
              {/* <Button gradientDuoTone='purpleToBlue'>Cari</Button> */}
            </div>

    <       div className='mx-1'>
                <Link to='/dashboard/matakuliah/create'>
                  <ButtonComponent>+Buat data</ButtonComponent>
                </Link>   
            </div>
          </div>

        {/* <div className="max-w-md my-5">
          <TextInput id="email4" type="email"  rightIcon={HiOutlineSearch} placeholder="name@flowbite.com" required sizing='sm' addon='MK'/>
        </div> */}

          <Table hoverable>
            <Table.Head>
            {x.map((y) => (
              <Table.HeadCell key={y.id}>
                {y.title}
              </Table.HeadCell>
              ))}
            </Table.Head>
            {mk.map((x) => (
                <Table.Body className="divide-y">
                  <ListMataKuliah
                    id={x.id}
                    kode={x.kode}
                    nama={x.nama}
                  />
                </Table.Body>
              ))}


            {/* <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Fairuz Hibatullah Akbar'}
                </Table.Cell>
                <Table.Cell>232101388</Table.Cell>
                <Table.Cell>TI</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell>White</Table.Cell>
                <Table.Cell>Laptop PC</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body> */}
          </Table>
          {/* <Pagination currentPage={onPageChange} totalPages={2} onPageChange={onPageChange}/> */}
        </div>
    </WrapperDashboard>
  )
}

export default DashboardMataKuliahPage