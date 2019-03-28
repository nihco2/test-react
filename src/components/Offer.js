import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemOffer = styled.a`
  display: block;
  color: var(--primary);
  font-size: 14px;
  text-decoration: none;
`;


class Offer extends Component {
  render() {
    return (
      <ItemOffer href="/">
        up to {this.props.maxoffer} {this.props.currency} offered
      </ItemOffer>
    );
  }
}

Offer.propTypes = {
  maxoffer: PropTypes.string,
  currency: PropTypes.string
};
  

export default Offer;