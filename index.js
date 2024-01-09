
// comment the provided codes as per requirement.


// for wallets using etherium chain
async function connectWallet() {
    accounts= await window.ethereum.request({method: "eth_requestAccounts", target: "blank"}).catch((err)=>{
        console.log(err.code)
    })

    console.log(accounts)
}


//for wallets using binance chain
async function connectWallet() {
    // Check if the Binance Chain Wallet is installed
    if (window.BinanceChain) {
        try {
            // Request Binance Chain accounts
            const accounts = await window.BinanceChain.requestAccounts();
            
            // Log the connected accounts
            console.log(accounts);
            
            // Now you can use the accounts to interact with the Binance Smart Chain
            // For example, you can use these accounts to make transactions on the Binance Smart Chain
        } catch (error) {
            // Handle errors
            console.error(error);
        }
    } else {
        // Binance Chain Wallet not installed or not detected
        console.error("Binance Chain Wallet not detected. Please install it.");
    }
}
