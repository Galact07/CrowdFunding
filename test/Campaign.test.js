const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compileFactory = require("../ethereum/build/CampaignFactory.json");
const compileCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compileFactory.interface))
    .deploy({ data: compileFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods
    .createCampaign("100")
    .send({ from: accounts[0], gas: "1000000" });

  [campaignAddress] = await factory.methods.getDeployedCampaign().call();

  campaign = await new web3.eth.Contract(
    JSON.parse(compileCampaign.interface),
    campaignAddress
  );
});

describe("Campaign", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
  it("is a manager", async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });
  it("person who contribute money is a approver", async () => {
    await campaign.methods
      .contribute()
      .send({ value: "200", from: accounts[1] });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });
  it("minimumContribution", async () => {
    try {
      await campaign.methods.contribute().send({ value: "5", accounts: [1] });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("the contract is working", async () => {
    await campaign.methods
      .contribute()
      .send({ value: web3.utils.toWei("10", "ether"), from: accounts[0] });

    await campaign.methods
      .createRequest("A", web3.utils.toWei("5", "ether"), accounts[1])
      .send({ from: accounts[0], gas: "1000000" });

    await campaign.methods
      .approveRequest(0)
      .send({ from: accounts[0], gas: "1000000" });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "1000000",
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);

    assert(balance > 104);
  });
});
