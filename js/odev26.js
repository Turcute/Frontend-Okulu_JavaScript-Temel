// Kullanıcı Seçimine Göre Dizi Parçası Alma (slice)

let cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"];

let value = Number(prompt(`Please enter the starting value`))
let endValue = Number(prompt(`Please enter the end value`))

cities.slice(value, endValue)

console.log(`Cities: ${cities}`);
console.log(`Selected Cities: ${cities.slice(value, endValue)}`);


