// Kullanıcı Bilgilerindeki Değerleri Listeleme

let user = {
  name: "Ayşe",
  age: 27,
  role: "editor",
  active: true
};

let values = Object.values(user);

for (let value of values){
  console.log(value);
}
