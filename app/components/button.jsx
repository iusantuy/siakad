import { Button } from '../flowbite-react.module'

export default function ButtonComponent({
    children,
    className,
    disabled,
    isProcessing,
    onClick,
    size,
    type
}) {
    return (
        <Button
            className={className}
            disabled={disabled}
            isProcessing={isProcessing}
            onClick={onClick}
            gradientDuoTone='cyanToBlue'
            size={size}
            type={type}
        >
            {children}
        </Button>
    )
}