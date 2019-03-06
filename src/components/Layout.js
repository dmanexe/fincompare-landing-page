'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/fincompare_blu.svg"/>
          </Link>
        </header>
        <div className="title-content">
          <h1>Our Clients &amp; Funding Secured</h1>
        </div>
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}
