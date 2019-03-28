import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ItemTitle = styled.h6`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;


class Title extends Component {
  render() {
    return (
      <ItemTitle>
        {this.props.title}
      </ItemTitle>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string
};

export default Title;