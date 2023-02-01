import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      setHidden(false);
      setMessage(
        "It will take around 15 to 20 seconds to complete the transaction. Please Wait!"
      );
      setLoading(true);
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(minimumContribution)
        .send({ from: accounts[0] });
      setMessage("");
      setHidden(true);
      Router.pushRoute("/");
    } catch (err) {
      setHidden(true);
      setErrorMessage(err.message);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <h3>Create Campaign</h3>
      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={(e) => setMinimumContribution(e.target.value)}
          />
        </Form.Field>
        <Message
          error
          header="Oops! Something Went Wrong"
          content={errorMessage}
        />
        <Message hidden={hidden} primary content={message} />
        <Button loading={loading} primary>
          Create!
        </Button>
      </Form>
    </Layout>
  );
};

export default CampaignNew;
