var countries = [
  {
    'country'     : 'India',
    'inhabitants' : 1398496000
  },
  {
    'country'     : 'China',
    'inhabitants' : 1404959000
  },
  {
    'country'     : 'Indonesia',
    'inhabitants' : 269856000
  },
  {
    'country'     : 'Estados Unidos',
    'inhabitants' : 330641000
  }
];

const newCountriesArray = countries.sort((country1,country2) => {
  return country2.inhabitants - country1.inhabitants;
});

const infoNode = document.querySelector('#info');
const allCountries = [];

countries.forEach((country) => {
  const countryChild = document.createElement('div');

  const nameCountryChild = document.createElement('h2');
  nameCountryChild.textContent = country.country;

  const inhabitantsChild = document.createElement('p');
  inhabitantsChild.textContent = `Inhabitants: ${country.inhabitants}`;

  countryChild.append(nameCountryChild, inhabitantsChild);
  allCountries.push(countryChild);
});

infoNode.append(...allCountries);