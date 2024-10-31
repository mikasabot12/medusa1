document.getElementById("connectWallet").addEventListener("click", async () => {
    // ایجاد provider برای WalletConnect
    const provider = new WalletConnectProvider.default({
        infuraId: "668795322eb142309aab4f21e891f375"  // شناسه Infura
    });

    // فعال کردن provider
    await provider.enable();

    // اتصال provider به ethers.js
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();

    try {
        // گرفتن آدرس کیف پول
        const address = await signer.getAddress();
        document.getElementById("walletAddress").innerText = "Wallet Address: " + address;
    } catch (error) {
        console.error("Connection failed:", error);
    }
});
 
