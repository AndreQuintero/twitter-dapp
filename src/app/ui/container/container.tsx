import React from "react"
import { container } from "../../../../styled-system/patterns"

type ContainerType = {
    children: React.ReactNode
}
export const Container = ({ children }: ContainerType) => {
    return (
        <section className={container()}> { children } </section>
    )
}