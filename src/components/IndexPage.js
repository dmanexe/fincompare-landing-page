'use strict';

import React from 'react';
import CompanyPreview from './CompanyPreview';
import companies from '../data/companies';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="companies-selector">
          {companies.map(companyData => <CompanyPreview key={companyData.id} {...companyData} />)}
        </div>
      </div>
    );
  }
}
