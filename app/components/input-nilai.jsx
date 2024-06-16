import React from 'react'
import _ from 'lodash'
import { FloatingLabel } from 'flowbite-react'


function isEnterOrEscapeKeyEvent(event) {
    return event.key === 'Enter' || event.key === 'Escape'
}

export default function InputNilaiComponent({ onChange, value }) {
    const [isEditing, setIsEditing] = React.useState(false)
    const [text, setText] = React.useState('-')
    const inputValue = (e) => e.target.value
    const onEditEnd = () => {
        setIsEditing(false)
    }

    return isEditing ? (
        <input
            // variant='filled'
            // sizing='sm'
            value={value}
            // className="min-w-24 bg-transparent border-2 border-black border-solid"
            onKeyDown={(event) => {
                if (isEnterOrEscapeKeyEvent(event)) {
                    event.preventDefault()
                    event.stopPropagation()
                    onEditEnd()
                }
            }}
            onChange={onChange}
            onBlur={onEditEnd}
            autoFocus
        />
    ) : (
        <div className="select-none" onDoubleClick={() => setIsEditing(true)}>
            {value}
        </div>
    )
}


// return isEditing ? (
//     <input
//         // variant='filled'
//         // sizing='sm'
//         value={text}
//         // className="min-w-24 bg-transparent border-2 border-black border-solid"
//         onKeyDown={(event) => {
//             if (isEnterOrEscapeKeyEvent(event)) {
//                 event.preventDefault()
//                 event.stopPropagation()
//                 onEditEnd()
//             }
//         }}
//         onChange={_.flow(inputValue, setText)}
//         onBlur={onEditEnd}
//         autoFocus
//     />
// ) : (
//     <div className="select-none" onDoubleClick={() => setIsEditing(true)}>
//         {text}
//     </div>
// )