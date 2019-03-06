"use strict";

const companies = [
  {
    'id': 'commerzbank',
    'name': 'Commerzbank',
    'country': 'de',
    'birth': '1870',
    'image': 'commerzbank.jpg',
    'cover': 'commerzbank-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Commerzbank',
    'medals': [
      { 'year': '1992', 'type': 'A', 'city': 'Frankfurt', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '1996', 'type': 'A', 'city': 'Vienna', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '2008', 'type': 'C', 'city': 'San Francisco', 'event': 'Series C Funding', 'category': 'Public' },
      { 'year': '2010', 'type': 'B', 'city': 'Berlin', 'event': 'Series B Funding', 'category': 'Private' },
      { 'year': '2011', 'type': 'A', 'city': 'Frankfurt', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '2013', 'type': 'A', 'city': 'Selma', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '2015', 'type': 'C', 'city': 'New York', 'event': 'Series C Funding', 'category': 'Public' },
      { 'year': '2018', 'type': 'B', 'city': 'Barcelona', 'event': 'Series B Funding', 'category': 'Private' }
    ],
  },
  {
    'id': 'berliner-volksbank',
    'name': 'Berliner Volksbank',
    'country': 'de',
    'birth': '1955',
    'image': 'berliner-volksbank.png',
    'cover': 'berliner-volksbank-cover.jpg',
    'link': 'https://de.wikipedia.org/wiki/Berliner_Volksbank',
    'medals': [
      { 'year': '1992', 'type': 'A', 'city': 'Frankfurt', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'A', 'city': 'Vienna', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'C', 'city': 'San Francisco', 'event': 'Series C Funding', 'category': 'Public' },
      { 'year': '1992', 'type': 'B', 'city': 'Berlin', 'event': 'Series B Funding', 'category': 'Private' }
    ],
  },
  {
    'id': 'abs-global-factoring',
    'name': 'A.B.S.',
    'country': 'fr',
    'birth': '1944',
    'image': 'abs-global-factoring.png',
    'cover': 'abs-global-factoring.jpg',
    'link': '#',
    'medals': [
      { 'year': '1992', 'type': 'A', 'city': 'Frankfurt', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'A', 'city': 'Vienna', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'C', 'city': 'San Francisco', 'event': 'Series C Funding', 'category': 'Public' },
      { 'year': '1992', 'type': 'B', 'city': 'Berlin', 'event': 'Series B Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'A', 'city': 'Paris', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'C', 'city': 'San Francisco', 'event': 'Series C Funding', 'category': 'Public' },
      { 'year': '1992', 'type': 'B', 'city': 'Berlin', 'event': 'Series B Funding', 'category': 'Private' }
    ],
  },
  {
    'id': 'deutsch-finetrading',
    'name': 'Deutsch Finetrading',
    'country': 'nl',
    'birth': '1968',
    'image': 'deutsche-finetrading.jpg',
    'cover': 'deutsche-finetrading-cover.jpg',
    'link': 'https://dft-ag.de/',
    'medals': [
      { 'year': '1992', 'type': 'A', 'city': 'Amsterdam', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'A', 'city': 'Vienna', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'C', 'city': 'San Francisco', 'event': 'Series C Funding', 'category': 'Public' },
      { 'year': '1992', 'type': 'B', 'city': 'Berlin', 'event': 'Series B Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'A', 'city': 'Los Angeles', 'event': 'Series B Funding', 'category': 'Private' }
    ],
  },
  {
    'id': 'iwoca',
    'name': 'iWoca',
    'country': 'uk',
    'birth': '2005',
    'image': 'iwoca.png',
    'cover': 'iwoca-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Teddy_Riner',
    'medals': [
      { 'year': '1992', 'type': 'A', 'city': 'Frankfurt', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'A', 'city': 'Vienna', 'event': 'Series A Funding', 'category': 'Private' },
      { 'year': '1992', 'type': 'C', 'city': 'San Francisco', 'event': 'Series C Funding', 'category': 'Public' },
      { 'year': '1992', 'type': 'B', 'city': 'Berlin', 'event': 'Series B Funding', 'category': 'Private' }
    ],
  }
];

export default companies;
