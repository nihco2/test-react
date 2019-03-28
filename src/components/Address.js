import React, { Component } from 'react';
import styled from 'styled-components';
import Offer from './Offer';
import PropTypes from 'prop-types';

const ItemAddress = styled.address`
  margin: 0;
  font-style: normal;
  font-size: 12px;
`;


class Address extends Component {
  render() {
    return (
      <ItemAddress>
        {this.props.address}<br />
        {this.props.zipcode} {this.props.city}
        <Offer maxoffer={this.props.maxoffer} currency={this.props.currency}/>
      </ItemAddress>
    );
  }
}

Address.propTypes = {
  address: PropTypes.string,
  zipcode: PropTypes.string
};

export default Address;