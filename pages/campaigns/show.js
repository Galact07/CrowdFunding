import React from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

const CampaignShow = (props) => {
  const renderCards = () => {
    const {
      minimumContribution,
      balance,
      requestsCount,
      approversCount,
      manager,
    } = props;
    const items = [
      {
        header: manager,
        meta: "Address of manager",
        description:
          "The manager created this campaign and create requests for this campaign",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (Wei)",
        description: "You must contribute at least this much wei to campaign",
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description: "A request tries to withdraw money from the campaign",
      },
      {
        header: approversCount,
        meta: "Campaign Balance (ether)",
        description: "Number of people who have already donated to the",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "The balance is how much money this campaign ha left to spend",
      },
    ];
    return <Card.Group items={items} />;
  };
  return (
    <Layout>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>{renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={props.address} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link legacyBehavior route={`/campaigns/${props.address}/requests`}>
              <a>
                <Button primary>View Requests</Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

CampaignShow.getInitialProps = async (props) => {
  const campaign = await Campaign(props.query.address);
  const summary = await campaign.methods.getSummary().call();
  return {
    address: props.query.address,
    minimumContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};

export default CampaignShow;
