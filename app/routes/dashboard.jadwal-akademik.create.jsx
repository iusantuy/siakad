import { redirect } from "@remix-run/node";
import Modal from "~/components/modal";
import CreateJadwalAkdemikPage from "~/pages/dashboard-jadwal-akademik/create";
import { addJadwalAkademik } from "~/server/jadwal-akademik";
// import ToastComponent from "../components/toast";




export default function CreateJadwalAkademik() {
    return (
        <Modal>
            <CreateJadwalAkdemikPage/>
        </Modal>
    )
}

export async function action({request}) {
    try {
        const formData = await request.formData()
        const jadwalAkademikData = Object.fromEntries(formData)
        const add = await addJadwalAkademik(jadwalAkademikData)
        // if (add) {
        //     return (
        //         <ToastComponent>
        //             OK
        //         </ToastComponent>
        //     )
        // }
        return redirect('/dashboard/jadwal-akademik')
    } catch (e) {
        throw e
    }
}