// Şehir Verilerini DOM ile Listeleme (mini pratik)

let allCities = document.getElementById(`allCities`);
let foodCities = document.getElementById(`foodCities`);
let historyCities = document.getElementById(`historyCities`);
let oddCities = document.getElementById(`oddCities`);
let evenCities = document.getElementById(`evenCities`);



cities.forEach(city => {
  let li = document.createElement(`li`);
  li.textContent = `${city.city} - ${city.famousFor}`;
  allCities.appendChild(li)

  if (city.type === `food`) {
    let li = document.createElement(`li`);
    li.textContent = city.city;
    foodCities.appendChild(li);
  }

  if (city.type === `history`) {
    let li = document.createElement(`li`);
    li.textContent = city.city;
    historyCities.appendChild(li);
  }

  let plate = Number(city.plateNumber);

  if (plate % 2 === 0) {
    let li = document.createElement("li");
    li.textContent = city.city;
    evenCities.appendChild(li);
  } else {
    let li = document.createElement("li");
    li.textContent = city.city;
    oddCities.appendChild(li);
  }
});