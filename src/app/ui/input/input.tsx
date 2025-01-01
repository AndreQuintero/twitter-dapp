"use client"
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ChangeEvent, ComponentProps, forwardRef, useImperativeHandle, useState } from "react";
import * as S from './style'

export type InputRefProps = {
    getValue: () => string;
};

type InputProps = {
    // Ref is typed to use the custom `TextAreaRefProps`
    ref?: React.Ref<InputRefProps>;
    onChange?: ((e: ChangeEvent<HTMLInputElement>) => void)
} & ComponentProps<'input'>;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<InputRefProps, InputProps>(
    ({ onChange, ...props }, ref) => {
        const [value, setValue] = useState('');
        

        useImperativeHandle(ref, () => ({
            getValue() {
                return value;
            },
        }));

        return (
            <input
               className={S.Input()}
                {...props}
                onChange={(e) => {
                    setValue(e.target.value)
                    !!onChange && onChange(e)
                }}
                
            />
        );
    }
);