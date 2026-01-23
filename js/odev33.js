// Kullanıcı Profil Bilgisi ve Koşullu Gösterim (Object Key–Value)

let userName = prompt(`Please enter your name`)
let userAge = Number(prompt(`Please enter your age`))
let userRole = prompt(`Please select your role admin/editor/user`)

let userProfile = {
  Name: userName,
  Age: userAge,
  Role: userRole
}

console.log(userProfile)

if (userAge < 18) {
  console.log(`You are underage`);
} else if (userRole === `admin`) {
  console.log(`Administrator access`)
} else {
  console.log(`Standart access`)
}