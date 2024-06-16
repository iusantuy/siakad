import { Form, useNavigate, useNavigation } from "@remix-run/react"
import { Button } from "flowbite-react"
import ButtonComponent from "../../components/button"

const CreateMataKuliahPage = () => {
    const navigate = useNavigate()
    function close() {
        navigate('..')
    }
    // const [openModal, setOpenModal] = useState(false);
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    return (
        <div className='relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5'>
            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Buat data mata kuliah baru
                </h3>
             
                  <button onClick={close} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Close modal</span>
                  </button>
                
            </div>
            <Form method='POST'>
                <div className="overflow-y-scroll shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                                Nama Mata Kuliah
                            </label>
                            <input
                                required
                                type="text"
                                name="nama"
                                id="nama"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                // defaultValue={defaultValue.price}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="kode" className="block text-sm font-medium text-gray-700">
                                Kode
                            </label>
                            <input
                                required
                                type="text"
                                name="kode"
                                id="kode"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                // defaultValue={defaultValue.name}
                            />
                        </div>
                    </div>

                    
                    <div className="my-5">
                        <ButtonComponent
                            isProcessing={isSubmitting}
                            disabled={isSubmitting}
                            type="submit"
                            // className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            {/* {isSubmitting ? 'Loading...' : 'Submit'} */}
                            Submit
                        </ButtonComponent>
                    </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default CreateMataKuliahPage