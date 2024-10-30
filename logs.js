const {ethers} = require("ethers");

const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/polygon");

const erc721Abi = [
    "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)"
];
const getTransactionData = async (txHash) => {
    try {

        const receipt = await provider.getTransactionReceipt(txHash);
        if (!receipt || !receipt.logs) {
            return "Transaction receipt or logs not found!";
        }

        const erc721Interface = new ethers.Interface(erc721Abi);

        const transferEventSignature = "Transfer(address,address,uint256)";
        const transferEventTopic = ethers.id(transferEventSignature);

        const erc721Transfers = receipt.logs
            .filter(log => log.topics[0] === transferEventTopic)
            .map(log => {
                try {
                    const parsedLog = erc721Interface.parseLog(log);
                    return {
                        from: parsedLog.args.from,
                        to: parsedLog.args.to,
                        tokenId: parsedLog.args.tokenId.toString()
                    };
                } catch (parseError) {
                    return null;
                }
            });

        return erc721Transfers.filter(transfer => transfer !== null);

    } catch (error) {
        console.error("Error fetching transaction:", error);
        return null;
    }
}

module.exports = {
    getTransactionData
}