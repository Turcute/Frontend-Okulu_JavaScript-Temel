// Kullanıcı Bilgilerini Key–Value Olarak Saklama

let userName = prompt(`What's your name`)
let userAge = Number(prompt(`What's your Age`))
let userJob = prompt(`What's your Job`)

let userInformation = {
  Name: userName,
  Age: userAge,
  Job: userJob
}

console.log(userInformation)