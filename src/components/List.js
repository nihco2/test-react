import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;


class List extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.shops.map((shop, index) => {
          return <Item key={index} shop={shop}/>
        })}
      </Wrapper>
    );
  }
}

export default List;