// Kullanıcı Profili ve Adres Bilgileri (Nested Object)

let userName = prompt(`Please enter your name`);
let userCity = prompt(`Please enter your city`);
let userDistrict = prompt(`Please enter your district`);


let user = {
  name: userName,
  address: {
    city: userCity,
    district: userDistrict
  }
}

console.log(`Your name: ${user.name}`);
console.log(user.address);