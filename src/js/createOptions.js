import axios from 'axios';

function sortCountries(x, y) {
  if (x.name < y.name) {
    return -1;
  }
  if (x.name > y.name) {
    return 1;
  }
  return 0;
}

const createCountryNames = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const countries = [];

  response.data.forEach((country) => {
    countries.push({
      name: country.name.common,
      short: country.cca2.toLowerCase(),
    });
  });

  const sortedCountries = countries.sort(sortCountries);
  return sortedCountries;
};

export const addOptions = async () => {
  const countries = await createCountryNames();
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.short;
    option.text = country.name;
    document.querySelector('#countryId').appendChild(option);
  })
};
