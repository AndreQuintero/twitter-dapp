import { TweetItem } from "@/app/layout/tweet-item"
import { css } from "../../../../styled-system/css"

export const TweetList = () => {
    return (
        <div className={css({width: '100%', border: '1px solid token(colors.secondary)', mt: '1.6rem', mb: '1.6rem'})}>
            <ul>
                <TweetItem username="Andre" bio="Desenvolvedor blockchain" message="This is my first tweet using blockchain!"/>
                <TweetItem username="Andre" bio="Desenvolvedor blockchain" message="This is my first tweet using blockchain!"/>
                <TweetItem username="Andre" bio="Desenvolvedor blockchain" message="This is my first tweet using blockchain!"/>
                <TweetItem username="Andre" bio="Desenvolvedor blockchain" message="This is my first tweet using blockchain!"/>
            </ul>
        </div>
    )
}