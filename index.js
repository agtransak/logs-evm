const {getTransactionData} = require("./logs");

const txHash = "0x90ac468a1fbd79b27d032d4c20f4de131aed40b754111c0793cc553d69e0f91a"

const txHashes = [
    txHash,
    "0x5cbc0f33b643d7dd5841a02fdef23a1d8520c4806033094d14c3957ea1cf3d0e",
    "0xacf53950ef66e5806992db1d35a0941e665fabc6353b03ec2ee2229c7265017a",
    "0x695b85ddf1a4e4efe12f49af109c52f9f1d33df9355ff497ec16243033e0c60b",
    "0xc8be037126984a8fb3c0516621c979e9ef5bda59d357def61c96b93a3fc01b0a",
    "0xceabdba0d8eb60d52db5be72335f8e2afaf89e5a475092392e2bcf68e8aa7ffa",
    "0xb6eb0e2671d60349eedaaeb3bb25776b634a310fd0de1447d323542196be7c76",
    "0x471ea94aa9a8a81f44a74836c6cb90d1b4bf287d335db65d7d58639214cfb63c",
    "0xdce4ce48b6be31ffe3ef8b380f97669fafa69ab65c88b541381cbe212fae1522",
    "0xab7b71590c579ed59979921e558275aacda312fb86bce451db502801042a8959"
]

txHashes.forEach(txHash => {
    getTransactionData(txHash)
        .then(details => {
            console.log("\n\n" +txHash + " ->")
            console.log(details)
        })
        .catch(error => {
            console.log("\n\n" +txHash + " ->")
            console.error(error)
        });
})
