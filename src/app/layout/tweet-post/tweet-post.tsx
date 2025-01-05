"use client"
import { Button } from "@/app/ui/button"
import { TextArea, TextAreaRefProps } from "@/app/ui/textarea"
import {  useRef, useState } from "react"
import { css } from "../../../../styled-system/css"

type TweetPostProps = {
    characterLimit?: number
}

export const TweetPost = ({ characterLimit = 280 }:TweetPostProps) => {
     const textRef = useRef<TextAreaRefProps>(null)
     const [message, setMessage] = useState('')
    return (
        <div className={css({mt: '1.6rem', width: '100%'})}>
            <TextArea maxLength={characterLimit} onChange={(e) => setMessage(e.target.value)} placeholder="What's on your mind?" ref={textRef}/>
            <p className={css({textAlign: 'right'})}>you can still type more: <strong>{characterLimit - message.length }</strong></p>
            <Button onClick={() => console.log(textRef.current?.getValue())}>Post</Button>
        </div>
    )
}