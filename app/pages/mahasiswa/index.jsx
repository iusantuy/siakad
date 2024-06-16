import React from 'react'
import { Link, useLoaderData } from '@remix-run/react'
import { Button, Card, Timeline } from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import HeaderLayout from '~/layouts/header'

const HomeMahasiswaPage = ({JA}) => {
    // const jadwalAkademik = useLoaderData()
    // console.log(jadwalAkademik)
    // const pengumuman = [

    // ]
  return (
    <>
        {/* <HeaderLayout/> */}

        <div class="flex flex-row justify-center gap-4">
            <div class="basis-1/2">
            {/* {jadwalAkademik.map((ja) => (
                    <div key={ja.id}>
                        {ja.judul}
                        {ja.tanggal}
                        {ja.deskripsi}
                    </div>
                ))} */}
                
                <Card>
                    <div className="mb-4 flex items-center justify-between">
                        <h5 className="font-bold leading-none text-gray-900 dark:text-white">IPK: 4</h5>
                        <Link to='/mhs/nilai'>
                        <div className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                            Lihat nilai
                        </div>
                        </Link>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                            {/* <div className="shrink-0">
                            <h1>Semester 5</h1>
                            </div> */}
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Fairuz Hibatullah Akbar</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">232101388</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">6TI2</p>
                            </div>
                            {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">5TI</div> */}
                            </div>
                        </li>
                        {/* <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                                <Image
                                alt="Bonnie image"
                                height="32"
                                src="/images/people/profile-picture-3.jpg"
                                width="32"
                                className="rounded-full"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $3467
                            </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                                <Image
                                alt="Michael image"
                                height="32"
                                src="/images/people/profile-picture-2.jpg"
                                width="32"
                                className="rounded-full"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                                <Image
                                alt="Lana image"
                                height="32"
                                src="/images/people/profile-picture-4.jpg"
                                width="32"
                                className="rounded-full"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
                            </div>
                        </li>
                        <li className="pb-0 pt-3 sm:pt-4">
                            <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                                <Image
                                alt="Thomas image"
                                height="32"
                                src="/images/people/profile-picture-5.jpg"
                                width="32"
                                className="rounded-full"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $2367
                            </div>
                            </div>
                        </li> */}
                        </ul>
                    </div>
                </Card>
                {/* <Card>
                    <h1>jbakwv</h1>
                </Card> */}
            </div>
            <div class="basis-1/4">
            <Card>
                    <h1>Jadwal Akademik</h1>
                    <Timeline>

                    <Timeline.Item>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                            <Timeline.Time>1-8-2024</Timeline.Time>
                            <Timeline.Title>Libur UAS</Timeline.Title>
                            <Timeline.Body>
                                Libur setelah UAS dilaksanakan dan mulai perkuliahan kembali tanggal 1-9-2024
                            </Timeline.Body>
                            <Button color="gray">
                                Detail
                                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                            </Button>
                            </Timeline.Content>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                            <Timeline.Time>1-5-2024</Timeline.Time>
                            <Timeline.Title>Libur UTS</Timeline.Title>
                            <Timeline.Body>
                                Libur setelah UTS dilaksanakan dan mulai perkuliahan kembali tanggal 1-6-2024
                            </Timeline.Body>
                            <Button color="gray">
                                Detail
                                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                            </Button>
                            </Timeline.Content>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                            <Timeline.Time>1-1-2024</Timeline.Time>
                            <Timeline.Title>Libur</Timeline.Title>
                            <Timeline.Body>
                                Libur dan mulai perkuliahan kembali tanggal 1-2-2024
                            </Timeline.Body>
                            <Button color="gray">
                                Detail
                                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                            </Button>
                            </Timeline.Content>
                        </Timeline.Item>

                    {/* {JA.map((x) => (
                        <Timeline.Item>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                            <Timeline.Time>{x.tanggal}</Timeline.Time>
                            <Timeline.Title>{x.judul}</Timeline.Title>
                            <Timeline.Body>
                                {x.deskripsi}
                            </Timeline.Body>
                            <Button color="gray">
                                Learn More
                                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                            </Button>
                            </Timeline.Content>
                        </Timeline.Item>
                    )).slice(0, 5)} */}

                        {/* <Timeline.Item>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                            <Timeline.Time>March 2022</Timeline.Time>
                            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                            <Timeline.Body>
                                All of the pages and components are first designed in Figma and we keep a parity between the two versions
                                even as we update the project.
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                            <Timeline.Time>April 2022</Timeline.Time>
                            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                            <Timeline.Body>
                                Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item> */}
                    </Timeline>                                            
                    </Card>
            </div>    
        </div>

    </>
  )
}

export default HomeMahasiswaPage