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

const itemList1 = document.querySelector('li[data-value="orange"]');
itemList1.textContent = JSON.stringify(newCountriesArray[0]);

const itemList2 = document.querySelector('li[data-value="banana"]');
itemList2.textContent = JSON.stringify(newCountriesArray[1]);
