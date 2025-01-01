import { vstack } from "../../../../styled-system/patterns"
import * as S from './style'

type IntroductionProps = {
    title: string,
    subtitle: string
}

export const Introduction = ({ title,subtitle  }: IntroductionProps) => {
    return (
        <div className={vstack({ mt: { base: '9rem', lg: '15rem' }, textAlign: 'center' })}>
            <h1 className={S.title()}>{title}</h1>
            <h2 className={S.subtitle()}>{subtitle}</h2>
        </div>
    )
}