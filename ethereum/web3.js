import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/e8821f49dabd4c43b702605f3b7bf916"
  );

  web3 = new Web3(provider);
}

export default web3;
