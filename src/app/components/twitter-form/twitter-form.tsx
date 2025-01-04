"use client"
import { Account } from "@/app/layout/account"
import { TweetPost } from "@/app/layout/tweet-post"
import { vstack } from "../../../../styled-system/patterns"
import { useAccount, useProfile } from "@/app/hooks"
import { useStore } from "@/app/store"


export const TwitterForm = () => {
    const { isConnected } = useAccount(useStore)
    const {profileExists} = useProfile(useStore, useAccount)
    

    const showProfileForm = () => {
        if(isConnected() && !profileExists()) {
            return true
        }
        return false
    }

    return (
        <div className={vstack()}>
            {showProfileForm() && <Account />}
            {profileExists() && <TweetPost />}
        </div>
    )
}