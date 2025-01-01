import React, { ComponentProps } from "react"
import * as S from './style'

type ButtoProps = {
    variant?: 'primary' | 'secondary',
    size?: 'normal'  | 'large',
    children: React.ReactNode
} & ComponentProps<"button">

export const Button = ({ variant='primary', size='normal', children, ...props }: ButtoProps) => {
    return (<button className={S.button({colors: variant, sizes: size})} {...props}>{children}</button>)
}