"use client"
import { Button } from "@/app/ui/button"
import { TextArea, TextAreaRefProps } from "@/app/ui/textarea"
import {  useRef, useState } from "react"
import { css } from "../../../../styled-system/css"
import { useAccount, useTweet } from "@/app/hooks"
import { useStore } from "@/app/store"

type TweetPostProps = {
    characterLimit?: number
}

export const TweetPost = ({ characterLimit = 280 }:TweetPostProps) => {
    const textRef = useRef<TextAreaRefProps>(null)
    const { postTweets: _postTweets } = useTweet(useStore, useAccount)
    const [message, setMessage] = useState('')

    const postTweets = async () => {
        await _postTweets(textRef.current?.getValue() ?? '')
        textRef.current?.reset()
    }

    return (
        <div className={css({mt: '1.6rem', width: '100%'})}>
            <TextArea maxLength={characterLimit} onChange={(e) => setMessage(e.target.value)} placeholder="What's on your mind?" ref={textRef}/>
            <p className={css({textAlign: 'right'})}>you can still type more: <strong>{characterLimit - message.length }</strong></p>
            <Button onClick={postTweets}>Post</Button>
        </div>
    )
}