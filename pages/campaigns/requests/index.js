import React from "react";
import Layout from "../../../components/Layout";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

const RequestIndex = (props) => {
  const { Header, Row, HeaderCell, Body } = Table;

  const renderRows = () => {
    return props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={props.address}
          approversCount={props.approversCount}
        />
      );
    });
  };

  return (
    <Layout>
      <h3>Requests</h3>
      <Link legacyBehavior route={`/campaigns/${props.address}/requests/new`}>
        <a>
          <Button primary floated="right" style={{ marginBottom: "10px" }}>
            Add Requests
          </Button>
        </a>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{renderRows()}</Body>
      </Table>
      <div>Found {props.requestCount} requests.</div>
    </Layout>
  );
};

RequestIndex.getInitialProps = async (props) => {
  const address = props.query.address;
  const campaign = await Campaign(address);
  const requestCount = await campaign.methods.getRequestCount().call();
  const approversCount = await campaign.methods.approversCount().call();
  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );
  return { address, requests, requestCount, approversCount };
};

export default RequestIndex;
