// Kullanıcı Bilgisi ve Yetki Kontrol Sistemi (Bölüm sonu canavarı)

let userName = prompt(`Please enter your name: `)
let userAge = Number(prompt(`Please enter your age: `))
let userIsWorking = prompt(`Are you working? (yes / no)`)
let userRole = prompt(`What is your role? (admin/editor/user)`)
let userWorking = (userIsWorking === `yes`)


let ageMessage = ``
let roleMessage = ``

if (userAge < 18) {
  ageMessage = `You are underage`
} else if (userAge > 65) {
  ageMessage = `You are retired`
} else {
  if (userWorking) {
    ageMessage = `You are of working age`
  } else {
    ageMessage = `You are of working age but you are not working.`
  }
}

switch (userRole) {
  case `admin`:
    roleMessage = `You have all the authority.`
    break;
  case `editor`:
    roleMessage = `You can edit the content.`
    break;
  case `user`:
    roleMessage = `You only have view permissions.`
    break;
  default:
    roleMessage = `invalid role.`

}

console.log(`
Name: ${userName}
Age: ${userAge}
Work Status: ${ageMessage}
Role Status: ${roleMessage}
`)
