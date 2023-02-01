import React, { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import { Link, Router } from "../../../routes";
import web3 from "../../../ethereum/web3";
import Campaign from "../../../ethereum/campaign";

const RequestNew = (props) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [recipient, setRecipient] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const campaign = await Campaign(props.address);
    try {
      setHidden(false);
      setMessage(
        "It will take around 15 to 20 seconds to complete the transaction. Please Wait!"
      );
      setLoading(true);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({ from: accounts[0] });
      setMessage("");
      setHidden(true);
    } catch (e) {
      setHidden(true);
      setErrorMessage(err.message);
    }
    setLoading(false);
    Router.replaceRoute(`/campaigns/${props.address}/requests`);
  };

  return (
    <Layout>
      <Link legacyBehavior route={`/campaigns/${props.address}/requests`}>
        <a>Back</a>
      </Link>
      <h3>Create a Request</h3>
      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Amount in Ether</label>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </Form.Field>
        <Message
          error
          header="Oops! Something Went Wrong"
          content={errorMessage}
        />
        <Message hidden={hidden} primary content={message} />
        <Button loading={loading} primary>
          Create
        </Button>
      </Form>
    </Layout>
  );
};

RequestNew.getInitialProps = async (props) => {
  const { address } = props.query;
  return { address };
};

export default RequestNew;
