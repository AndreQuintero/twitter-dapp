import * as S from './style'

type TweetItemProps = {
    username: string
    bio: string
    message: string
}
export const TweetItem = ({username, bio, message}: TweetItemProps) => {
    return (
        <li className={S.item()}>
            <div>
                <label className={S.label()}>{username} - {bio}</label>
                <p className={S.paragraph()}>{message}</p>
            </div>
        </li>
    )
}