import React, { Component } from 'react';
import styled from 'styled-components';

const ItemOffer = styled.a`
  display: block;
  color: var(--primary);
  font-size: 14px;
  text-decoration: none;
`;


class Offer extends Component {
  render() {
    console.log(this.props)
    return (
      <ItemOffer href="/">
        up to {this.props.maxoffer} {this.props.currency} offered
      </ItemOffer>
    );
  }
}

export default Offer;