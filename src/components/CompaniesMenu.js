'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class CompaniesMenu extends React.Component {
  render() {
    return (
      <nav className="companies-menu">
        {this.props.companies.map(menucompany => {
          return <Link key={menucompany.id} to={`/company/${menucompany.id}`} activeClassName="active">
            {menucompany.name}
          </Link>;
        })}
      </nav>
    );
  }
}
