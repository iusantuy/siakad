import { TextInput } from '~/flowbite-react.module'

export default function TextInputComponent({
    className,
    type,
    name,
    id,
    autoComplete,
    disabled,
    defaultValue,
    maxLength
}) {
    return (
        <TextInput
            maxLength={maxLength}
            className={className}
            type={type}
            name={name}
            id={id}
            autoComplete={autoComplete}
            disabled={disabled}
            defaultValue={defaultValue}
        />
    )
}