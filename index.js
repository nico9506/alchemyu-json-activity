const axios = require("axios");
require("dotenv").config();

const ALCHEMY_URL = process.env.ALCHEMY_URL;
const testwallet = "0x55387A07a92797C041183742aA0e4cE265EF84ea";

function roundToDecimal(hexValue) {
  const wei = BigInt(hexValue);

  // ONLY SAFE FOR BALANCES < 2^53
  return Number(wei) / 1e18;
}

axios
  .post(ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBalance",
    params: [testwallet, "latest"],
  })
  .then((response) => {
    console.log(
      `Wallet (...${testwallet.slice(-4)}) balance: ${roundToDecimal(response.data.result)} eth`,
    );
  });

// axios
//   .post(ALCHEMY_URL, {
//     jsonrpc: "2.0",
//     id: 1,
//     method: "eth_getBlockByNumber",
//     params: [
//       "0xb443", // block 46147
//       // "latest",
//       true, // retrieve the full transaction object in transactions array
//     ],
//   })
//   .then((response) => {
//     console.log(response.data.result);
//   });
