import { HiCheck, HiX } from 'react-icons/hi'
import { Toast } from '../flowbite-react.module'

type ToastProps = {
    toast?: {
        message: string;
        type: 'success' | 'error'
    } | null
}

export default function ToastComponent(
{ toast }: ToastProps
) {
    return (
        <div className={`fixed ${toast ? 'visible' : 'invisible'}`}>
            <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                { toast?.type === 'success' ? <HiCheck className="h-5 w-5" /> : <HiX/>}
                </div>
                <div className="ml-3 text-sm font-normal">{toast?.message}</div>
                <Toast.Toggle />
            </Toast>
        </div>
    )
}