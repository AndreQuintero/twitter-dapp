import { cva } from "../../../../styled-system/css";

export const textArea = cva({
    base: {
        border: '2px solid token(colors.secondary)',
        width: '100%',
        height: '10rem',
        padding: '1.2rem',
        fontSize: '2rem',
        resize: 'none',
        '_focus': {
            border: '2px solid token(colors.primary)',
        },
        'lg': {
            height: '20rem'
        }
    }
})