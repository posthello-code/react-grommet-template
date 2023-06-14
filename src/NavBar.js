import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button, Text, Header } from 'grommet';
import { Home } from 'grommet-icons';

export class GrommetButtonNav extends Component {
  render() {
    const { text, path, icon } = this.props;
    return (
      <Link to={path}>
        <Button icon={icon} label={
          <Text color='white'>{text}</Text>} color="white"></Button>
      </Link>
    )
  }
}

export class NavBar extends Component {
  render() {
    return (
      <div id="nav-bar">
        <Header align="center" flex={false} justify="center" gap="5px" wrap={true}>
          <div className='navLink'>
            <GrommetButtonNav icon={<Home />} text="Navigation links up here" path="/"></GrommetButtonNav>
          </div>
        </Header>
      </div>
    )
  }
}