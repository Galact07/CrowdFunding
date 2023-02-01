import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x0086a55EB5804b6B35c6bA2EA97b98B6764e7981"
);

export default instance;
