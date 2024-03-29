'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class CompanyPreview extends React.Component {
  render() {
    return (
      <Link to={`/company/${this.props.id}`}>
        <div className="company-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="medals-count"><img src="/img/medal.png"/> {this.props.medals.length}</span>
        </div>
      </Link>
    );
  }
}
