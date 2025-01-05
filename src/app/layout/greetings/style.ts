import { cva } from "../../../../styled-system/css";

export const title = cva({
    base: {
        fontSize: '5rem',
        color: 'token(colors.primary)',
        fontWeight: 'bold',
        'lg': {
            fontSize: '10rem'
        }
    }
})

export const subtitle = cva({
    base: {
        fontSize: '1.6rem',
        fontWeight: 500,
        'lg': {
            fontSize: '2rem'
        }
    }
})