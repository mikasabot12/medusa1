document.getElementById("connectWallet").addEventListener("click", async () => {
            const connector = new WalletConnect.Client({
                projectId: "668795322eb142309aab4f21e891f375", // شناسه پروژه Infura
                // optional: additional configuration
            });

            if (!connector.connected) {
                // نمایش QR code و باز کردن پنجره اتصال
                await connector.createSession();
            }

            const uri = connector.uri;
            // این URI را می‌توانید برای نمایش QR code استفاده کنید.
            console.log(uri);

            // در اینجا می‌توانید QR code را با استفاده از کتابخانه‌ای مانند qrcode.js نمایش دهید.
            // (این مرحله به ایجاد QR Code بستگی دارد)

            connector.on("connect", async (error, payload) => {
                if (error) {
                    throw error;
                }

                // فعال‌سازی provider
                const { accounts } = payload.params[0];
                document.getElementById("walletAddress").innerText = "Wallet Address: " + accounts[0];
            });

            connector.on("disconnect", (error, payload) => {
                if (error) {
                    throw error;
                }

                console.log("Disconnected", payload);
            });
        });
