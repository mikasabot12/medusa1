document.getElementById("connectWallet").addEventListener("click", async () => {
    const provider = new WalletConnectProvider.default({
        infuraId: "668795322eb142309aab4f21e891f375"  // شناسه Infura
    });

    await provider.enable();
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();

    try {
        const address = await signer.getAddress();
        document.getElementById("walletAddress").innerText = "Wallet Address: " + address;
    } catch (error) {
        console.error("Connection failed:", error);
    }
});
