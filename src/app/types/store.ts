import { AccountSlice } from "../store/account-slice";
import { ProfileSlice } from "../store/profile-slice";
import { TweetSlice } from "../store/tweet-slice";

export type Store = AccountSlice & ProfileSlice & TweetSlice