"use client"
import { TweetItem } from "@/app/layout/tweet-item"
import { css } from "../../../../styled-system/css"
import { useStore } from "@/app/store"
import { useShallow } from "zustand/shallow"
import { useCallback, useEffect, useState } from "react"
import { useAccount, useProfile, useTweet } from "@/app/hooks"

export const TweetList = () => {
    const { tweets, displayName, bio } = useStore(useShallow( state => ({
        tweets: state.tweets,
        displayName: state.displayName,
        bio: state.bio
    }) ))
    const { getTweets: _getTweets } = useTweet(useStore, useAccount)
    const { profileExists } = useProfile(useStore, useAccount)
    const fetchTweets = useCallback(_getTweets, [_getTweets])
    const [fetched, setFetched] = useState(false)

   useEffect(() => {
        const getTweets = async () => {
            await fetchTweets()
            setFetched(true)
        }
        if(profileExists() && !fetched) {
            getTweets()
        }
   }, [profileExists, fetchTweets, fetched])
    return (
        <>
            {tweets.length > 0 && (
                <div className={css({width: '100%', border: '1px solid token(colors.secondary)', mt: '1.6rem', mb: '1.6rem'})}>
                    <ul>
                        { tweets.map( (tweet, index) => (
                            <TweetItem key={`${tweet.content}-${index}`} username={displayName} bio={bio} message={tweet.content}/>
                        ))}
               
                    </ul>
                </div>
            )}
        </>
    )
}