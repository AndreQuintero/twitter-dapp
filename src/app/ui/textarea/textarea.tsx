/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ChangeEvent, ComponentProps, forwardRef, useImperativeHandle, useState } from "react";
import * as S from './style'

export type TextAreaRefProps = {
    getValue: () => string;
    reset: () => void
};

type TextAreaProps = {
    // Ref is typed to use the custom `TextAreaRefProps`
    ref?: React.Ref<TextAreaRefProps>;
    onChange?: ((e: ChangeEvent<HTMLTextAreaElement>) => void)
} & ComponentProps<'textarea'>;

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef<TextAreaRefProps, TextAreaProps>(
    ({ onChange, ...props }, ref) => {
        const [value, setValue] = useState('');
        

        useImperativeHandle(ref, () => ({
            getValue() {
                return value;
            },
            reset(){
                setValue('')
            }
        }));

        return (
            <textarea
                className={S.textArea()} // Assuming S.textArea is defined elsewhere
                {...props}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                    !!onChange && onChange(e)
                }}
                
            />
        );
    }
);