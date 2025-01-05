import { StateCreator } from "zustand"
import { Store } from "../types/store"

export type TweetBody = {
    content: string
    likes: number
}

type TweetState = {
    tweets: TweetBody[]

}

type TweetActions = {
    post: (message: string) => void
    setTweets: (tweets: TweetBody[]) => void
}

export type TweetSlice = TweetState & TweetActions

export const createTweetSlice: StateCreator<Store, [['zustand/immer', never]], [], TweetSlice> = (set) => ({
    tweets: [],
    post: message => set(state => {
        state.tweets.unshift({ content: message, likes: 0 })
    }),
    setTweets: tweets => set(state => {
        state.tweets = tweets
    }),
})