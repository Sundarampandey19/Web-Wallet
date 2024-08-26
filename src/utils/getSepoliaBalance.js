export default async function  getSepEth(walletAddress,chain){
    let url=""
    if(chain==="Sepolia"){
        url = "https://eth-sepolia.g.alchemy.com/v2/TDOEevAe5ZwlElhfxxuesXjXjrrRG09i"
    }else{
        url = "https://eth-mainnet.g.alchemy.com/v2/TDOEevAe5ZwlElhfxxuesXjXjrrRG09i"

    }
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "jsonrpc":"2.0",
            "id":1,
            "method":"eth_getBalance",
            "params":[`${walletAddress}`,"latest"]
        })
    });
    const data = await response.json();
    return data
    
}