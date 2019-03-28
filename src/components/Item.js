import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Address from './Address';

const ListItem = styled.li`
  display: flex;
  max-height: 150px;
  border-bottom: 1px solid;
  border-bottom-color: var(--secondary);
  color: var(--secondary);
  padding: 10px;

  .address {
    margin-left: 10px;
    padding-top: 10px;
  }
`;


class Item extends Component {
  render() {
    return (
      <ListItem>
        <img className="logo" src={this.props.shop.logo} alt="logo" width="80" height="80"/>
        <div className="address">
          <Title title={this.props.shop.name} />
          <Address 
            address={this.props.shop.address}
            zipcode={this.props.shop.zipcode}
            city={this.props.shop.city}
            maxoffer={this.props.shop.maxoffer}
            currency={this.props.shop.currency}
            />
        </div>
      </ListItem>
    );
  }
}
  
export default Item;