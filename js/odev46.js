// İki Kullanıcı Listesini Birleştirme (Array + Spread)

let frontendUsers = ["Ali", "Ayşe", "Mehmet"];
let backendUsers = ["Veli", "Zeynep"];

let allUsers = [...frontendUsers, ...backendUsers];

console.log(allUsers); 