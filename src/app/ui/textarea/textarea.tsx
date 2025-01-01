import { useImperativeHandle, useState } from "react";
import * as S from './style'

export type TextAreaRefProps = {
    getValue: () => string
}

type TextAreaProps = {
    ref: React.Ref<TextAreaRefProps>
}

export const TextArea = ({ ref }: TextAreaProps) => {
    const [value, setValue] = useState('')

    useImperativeHandle(ref, ()=> {
        return {
            getValue() {
                return value
            }
        }
    })
    return (
        <textarea className={S.textArea()} onChange={(e) => setValue(e.target.value)}/>
    )
}