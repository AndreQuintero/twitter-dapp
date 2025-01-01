import { cva } from "../../../../styled-system/css";

export const Input = cva({
    base: {
        padding: '1.2rem 1.6rem',
        fontSize: '1.6rem',
        border: '1px solid token(colors.secondary)',
        width: '100%',
        borderRadius: '0.5rem',
        '_focus':{
            border: '1px solid token(colors.primary)',
        }
    }
})