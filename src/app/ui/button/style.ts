import { cva } from "../../../../styled-system/css";

export const button = cva({
    base: {
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '_disabled': {
            backgroundColor: '#ccc',
            cursor: 'not-allowed',
            border: 'none',
            '_hover': {
                backgroundColor: '#ccc',
                border: 'none',
                color: 'token(colors.label)'
            }
        }
    },
    variants: {
        colors: {
            primary: {
                color: 'token(colors.label)',
                backgroundColor: 'token(colors.primary)',
                border: '1px solid token(colors.primary)',
                transition: 'ease-in 0.2s',
                '_hover': {
                    color: 'token(colors.primary)',
                    backgroundColor: 'token(colors.label)'
                }
            },
            secondary: {
                color: 'token(colors.label)',
                backgroundColor: 'token(colors.secondary)',
                border: '1px solid token(colors.secondary)',
                transition: 'ease-in 0.2s',
                '_hover': {
                    color: 'token(colors.secondary)',
                    backgroundColor: 'token(colors.label)'
                }
            },
        },
        sizes: {
            normal: {   
                padding: '0.8rem 1.6rem',
                borderRadius: '4px',
                fontSize: '1.6rem'
            },
            large: {
                padding: '1rem 1.8rem',
                borderRadius: '4px',
                fontSize: '1.8rem'
            }
        }
    },
    defaultVariants: {
        colors: 'primary',
        sizes: 'normal'
    }
})

