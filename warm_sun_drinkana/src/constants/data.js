import images from './images';

const wines = [
  {
    title: 'Bruichladdich',
    price: '£50',
    age: 'Barley | 2012',
  },
  {
    title: 'Dalmore',
    price: '£85',
    age: 'Barley | 2007',
  },
  {
    title: 'Glenfiddich Fire & Cane',
    price: '£45',
    age: 'Rum cask | 2018',
  },
  {
    title: 'Pulteney',
    price: '£200',
    age: 'Bourbon cask | 1998',
  },
  {
    title: 'Tamdhu Batch No.1',
    price: '£150',
    age: 'Sherry cask | 2015',
  },
];

const cocktails = [
  {
    title: 'Ichiro 2021',
    price: '£299',
    age: 'White-Oak | Sherry Casks',
  },
  {
    title: "New Zealand 2004",
    price: '£95',
    age: 'Bourbon | Wine Casks',
  },
  {
    title: 'Spirit of Hven Dubhe',
    price: '£95',
    age: 'American | French | Spanish Oaks',
  },
  {
    title: 'Blackstrap Cove',
    price: '£40',
    age: 'Bourbon | Pedro Ximenex Casks ',
  }
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Distinguished Service',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Taste',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const local = [
  {
    name: "Kirkwall",
    region: "Orkney"
  },
  {
    name: "Kingsbarns",
    region: "St. Andrews"
  },
  {
    name: "Burn O'Bennie",
    region: "Banchory"
  },
  {
    name: "Talisker",
    region: "Isle of Skye"
  }
]

const dates = [
  {
    name: "Kirkwall",
    months: ["Jan ","Feb ","Mar "],
    dates: ["1st","2nd","3rd","4th","5th"]
  },
  {
    name: "Kingsbarns",
    months: ["Apr ","May ","Jul "],
    dates: ["1st","2nd","3rd","4th","5th"]
  },
  {
    name: "Burn O'Bennie",
    months: ["Jan ","Feb ","Mar "],
    dates: ["1st","2nd","3rd","4th","5th"]
  },
  {
    name: "Talisker",
    months: ["Sep ","Nov ","Dec "],
    dates: ["1st","2nd","3rd","4th","5th"]
  },
]

export default { wines, cocktails, awards, local, dates};
