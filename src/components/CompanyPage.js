'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import CompaniesMenu from './CompaniesMenu';
import Medal from './Medal';
import Flag from './Flag';
import companies from '../data/companies';

export default class CompanyPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const company = companies.filter((company) => company.id === id)[0];
    if (!company) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${company.cover})` };
    return (
      <div className="company-full">
        <CompaniesMenu companies={companies}/>
        <div className="company">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${company.image}`}/>
            <h2 className="name">{company.name}</h2>
          </div>
          <section className="description">
            Started in <strong><Flag code={company.country} showName="true"/></strong>,
            founded on {company.birth} (Find out more on <a href={company.link} target="_blank">Wikipedia</a>).
          </section>
          <section className="medals">
            <p>Completed of <strong>{company.medals.length}</strong> runs of funding:</p>
            <ul>{
              company.medals.map((medal, i) => <Medal key={i} {...medal}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the homepage</Link>
        </div>
      </div>
    );
  }
}
