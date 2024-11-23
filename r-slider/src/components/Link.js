import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${props => props.active ? 'pink' : '#fff'};
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  padding-left: 14px;
  padding-right: 14px;
  border-right: 1px dotted #fff;

  &:hover {
    color: #BdBdBd;
    text-decoration: none;
  }
  &:last-child {
    border-right: none;
  }
`

class Link extends React.Component {
  render() {
    return (
        <StyledLink href={this.props.link}> {this.props.text} </StyledLink>
    )
  }
}

export default Link