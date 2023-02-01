import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";

export default (props) => {
  return (
    <Container key={props.children}>
      <Header />
      {props.children}
    </Container>
  );
};
