import { cva } from "../../../../styled-system/css";

export const item = cva({
    base: {
        padding: '1.2rem 1.6rem',
        backgroundColor: '#F1F1F1',
        borderBottom: '0.5px dashed token(colors.secondary)',
        fontSize: '1.8rem',
    }
})

export const label = cva({
    base: {
        fontWeight: 'bold',
        paddingBottom: '1rem'
    }
})

export const paragraph = cva({
    base: {
        fontSize: '2.2rem'
    }
})