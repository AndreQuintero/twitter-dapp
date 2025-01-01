import { Account } from "@/app/layout/account"
import { TweetPost } from "@/app/layout/tweet-post"
import { vstack } from "../../../../styled-system/patterns"

export const TwitterForm = () => {
    return (
        <div className={vstack()}>
            <Account />
            <TweetPost />
        </div>
    )
}