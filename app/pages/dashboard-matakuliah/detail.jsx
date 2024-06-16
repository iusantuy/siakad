import { Form, useMatches, useParams } from '@remix-run/react'
import { TextInput } from 'flowbite-react'
import React from 'react'

const DetailMataKuliahPage = () => {
    const [isUpdate, setIsUpdate] = React.useState(true)
    const updateForm = () => {
        setIsUpdate(!isUpdate)
    }
    const params = useParams()
    const matches = useMatches()
    console.log(matches)
    // console.log(params)
    const mataKuliahData = matches.find(
      (match) => match.id === 'routes/dashboard.mahasiswa'
    ).data; 
    const detail = mataKuliahData.find(mahasiswa => mahasiswa.id === params.id)
    const defaultValue = 
    detail ? 
    {
        nama: detail.nama,
        kode: detail.kode
    } :
    {
        nama: '',
        kode: ''
    }

    // console.log(detailData)
    // console.log(detail)
    // console.log(mahasiswaData)
    console.log(detail.nama);
  return (
    <div className='relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5'>

        <Form>
            <div className="overflow-y-scroll shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="nim" className="block text-sm font-medium text-gray-700">
                            Mata Kuliah
                        </label>
                        <TextInput
                            required
                            type="text"
                            name="nim"
                            id="nim"
                            autoComplete="given-name"
                            // className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            disabled={isUpdate}
                            defaultValue={defaultValue}
                        />
                    </div>
    
                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="nim" className="block text-sm font-medium text-gray-700">
                            Kode
                        </label>
                        <TextInput
                            required
                            type="text"
                            name="nim"
                            id="nim"
                            autoComplete="given-name"
                            // className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            disabled={isUpdate}
                            defaultValue={defaultValue}
                        />
                    </div>
                </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Button
                size='xs'
                disabled
                    // disabled={isSubmitting}
                    type="submit"
                    //   className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Submit {/* {isSubmitting ? 'Loading...' : 'Submit'} */}
                </Button>
                </div>
            </div>
        </Form>
        <Button
        onClick={updateForm}
        // disabled={isSubmitting}
    //   type="submit"
    //   className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
    {isUpdate ? 'Update' : 'Batal'}
        </Button>
    </div>
  )
}

export default DetailMataKuliahPage