// ایجاد یک Web3Modal instance
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // Required
        options: {
            qrcode: true, // نمایش QR کد
            infuraId: "668795322eb142309aab4f21e891f375" // شناسه Infura
        }
    },
    torus: {
        package: Torus, // Required
        options: {
            // Options for Torus
        }
    }
};

const web3Modal = new Web3Modal({
    cacheProvider: false, // Optional
    providerOptions // Required
});

document.getElementById("connectWallet").addEventListener("click", async () => {
    try {
        const provider = await web3Modal.connect();
        const web3Provider = new ethers.providers.Web3Provider(provider);
        const signer = web3Provider.getSigner();
        
        const address = await signer.getAddress();
        document.getElementById("walletAddress").innerText = "Wallet Address: " + address;
    } catch (error) {
        console.error("Connection failed:", error);
    }
});
