// Kullanıcı Bilgilerindeki Alanları Listeleme

let user = {
  name: "Ali",
  age: 30,
  role: "admin",
  active: true
};

let keys = Object.keys(user);

for (let key of keys){
  console.log(key)
} 