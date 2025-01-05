import { TweetBody, UseStoreType } from "../store";
import { useContract } from "./useContract";
import TwitterAbi from "../abi/twitterAbi.json"
import { useShallow } from "zustand/shallow";
import { UseAccount } from ".";

export const useTweet = (useStore: UseStoreType, useAccount: UseAccount) => {
    const { accountId } = useAccount(useStore)
    const { getContract } = useContract(TwitterAbi, process.env.NEXT_PUBLIC_TWITTER_CONTRACT_ADDRESS!)
    const { post, setTweets } = useStore(useShallow( state => ({
        post: state.post,
        setTweets: state.setTweets
    })))

    const getTweets = async () => {
        const contract = getContract()
        try {
            const tweets: TweetBody[] = await contract.methods.getALLTweets(accountId).call({from : accountId})
            setTweets(tweets)
        } catch(e) {
            console.log(e)
        }
    }

    const postTweets =  async (message: string) => {
        const contract = getContract()
        try {
            await contract.methods.createTweet(message).send({from: accountId})
            post(message)
        } catch(e) {
            console.log(e)
        }
    } 
    return {
        getTweets,
        postTweets
    }
}