import { Button, Card } from '~/flowbite-react.module'
import React from 'react'
import HeaderLayout from '~/layouts/header'
import Wrapper from '../../layouts/wrapper'
import { Link } from '@remix-run/react'
import { HiAcademicCap, HiClipboardCheck } from 'react-icons/hi'

const HomeDosenPage = () => {
  return (
    <>
      {/* <HeaderLayout/> */}

      {/* <Wrapper> 
      </Wrapper>  */}

        <div class="flex flex-row justify-center gap-4">
          <div class="basis-1/4">
              <Link to='/dosen/absensi'>
                <Card>
                  <div className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <HiClipboardCheck/>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Absensi</p>
                        {/* <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p> */}
                      </div>
                      {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div> */}
                    </div>
                  </div>

                {/* <div className='flex justify-between align-center'>
                  <HiAcademicCap/>

                  <h1 className='flex justify-center'>Absensi & RPS</h1>
                </div> */}
                    {/* <h1>
                      Lihat
                    </h1> */}

                </Card>
              </Link>
          </div>

          <div class="basis-1/4">
              <Link to='/dosen/penilaian'>
                <Card>

                  <div className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <HiAcademicCap/>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Penilaian</p>
                        {/* <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p> */}
                      </div>
                      {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div> */}
                    </div>
                  </div>

                  {/* <h1 className='flex justify-center'>Penilaian</h1> */}
                    {/* <button>
                      Lihat
                    </button> */}
                </Card>
              </Link>
          </div>
          
          {/* <div class="basis-1/4">
            <Card>
                <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                      <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        View all
                      </a>
                </div>
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                        <h1>afawf</h1>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                      </div>
                    </li>
                  </ul>
                </div>
            </Card>
          </div>     */}
        </div>

      {/* <div class="flex flex-row justify-center gap-4">
        <div class="basis-1/2">
          <Card>
            <h1>adwaknd</h1>
          </Card>
        </div>
        <div class="basis-1/4">
          <Card>
              <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                    <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      View all
                    </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                      <h1>afawf</h1>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                    </div>
                  </li>



                  <li className="py-3 sm:py-4">
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
                  </li>




                </ul>
              </div>
          </Card>
        </div>    
      </div> */}

    </>
  )
}

export default HomeDosenPage