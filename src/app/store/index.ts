import { create } from "zustand";
import { Store } from "../types/store";
import { createAccountSlice } from "./account-slice"
import { createProfileSlice, ProfileState } from './profile-slice'
import { createTweetSlice, TweetBody } from './tweet-slice'
import { immer } from "zustand/middleware/immer";

export const useStore = create<Store>()(immer((...a) => ({
    ...createAccountSlice(...a),
    ...createProfileSlice(...a),
    ...createTweetSlice(...a)
})))

type UseStoreType = typeof useStore

export type {UseStoreType, ProfileState, TweetBody}