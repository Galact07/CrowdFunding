import React from "react";
import { Card, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

const CampaignIndex = ({ campaigns }) => {
  function renderCampaign() {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link legacyBehavior route={`/campaigns/${address}`}>
            <a>View campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>

        <Link legacyBehavior route="/campaigns/new">
          <a>
            <Button
              style={{ marginLeft: "8px" }}
              floated="right"
              content="Create Campaigns"
              icon="add"
              primary
            />
          </a>
        </Link>

        {renderCampaign()}
      </div>
    </Layout>
  );
};

CampaignIndex.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaign().call();
  return { campaigns };
};

export default CampaignIndex;
