// Yaşa Göre Koşullu Durum Kontrolü (switch)

let userAge = Number(prompt`Please enter your age: `)

switch (true) {

  case (userAge < 18):
    console.log(`You are underage`)
    break;

  case (userAge >= 18 && userAge <= 65):
    console.log(`You are of working age`)
    break;

  case (userAge > 65 && userAge <= 120): // Herhalde 120 yasin ustunde yasayan yoktur 😅
    console.log(`You are retired`)
    break;

  default:
    console.log(`Incorrect age information`)
}