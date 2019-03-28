import React, { Component } from 'react';
import styled from 'styled-components';

const Message = styled.div`
    background-color: #EFC8Cb;
    border: #C45C67 2px solid;
    color: #363A41;
    text-align: center;
    height: 50px;
    margin: 0;
`;


class Error extends Component {
  render() {
    return (
      <Message>
        <p><strong>An Error occured !</strong></p>
      </Message>
    );
  }
}

export default Error;