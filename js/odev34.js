// Kullanıcı Profilini Dinamik Olarak Güncelleme

let user = {
  name: `Ali`,
  age: 28
};

let wantsPhone = confirm(`Would you like to add a phone number?`);
if (wantsPhone === true) {
  let userPhone = prompt(`Enter your phone number`)
  user.phone = userPhone
} else {
  console.log(`Phone information could not be added`)
}

console.log(user)