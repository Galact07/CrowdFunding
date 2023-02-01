import react, { useState } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

const ContributeForm = ({ address }) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const campaign = await Campaign(address);
    try {
      setHidden(false);
      setMessage(
        "It will take around 15 to 20 seconds to complete the transaction. Please Wait!"
      );
      setLoading(true);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, "ether"),
      });
      setMessage("");
      setHidden(true);
    } catch (err) {
      setHidden(true);
      setErrorMessage(err.message);
    }
    setLoading(false);
    Router.replaceRoute(`/campaigns/${address}`);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          label="ether"
          labelPosition="right"
        />
      </Form.Field>
      <Message
        error
        header="Oops! Something Went Wrong"
        content={errorMessage}
      />
      <Message hidden={hidden} primary content={message} />
      <Button loading={loading} primary>
        Contribute !
      </Button>
    </Form>
  );
};

export default ContributeForm;
