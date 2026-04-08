const allCountriesDiv = document.getElementById("allCountries");

countries.forEach(country => {
  allCountriesDiv.innerHTML +=`
  <p>${country.flag} ${country.countryName} </p>
  `;
});

const groupedDiv = document.getElementById("groupedCountries");

const grouped = {};

countries.forEach(country => {
  if (!grouped[country.continent]) {
    grouped[country.continent] = [];
  }
  grouped[country.continent].push(country);
});

for (let continent in grouped) {
  groupedDiv.innerHTML += `<h2>${continent}</h2>`;

  grouped[continent].forEach(country => {
    groupedDiv.innerHTML += `
    <p>${country.flag} ${country.countryName} </p>
    `;
  });
}