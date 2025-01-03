import Web3 from "web3"

export const web3Instance = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const web = new Web3(window.ethereum).eth
    return web
}