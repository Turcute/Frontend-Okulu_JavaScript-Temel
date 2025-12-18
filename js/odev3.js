// Yaşa Göre Koşullu Durum Kontrolü 


let userAge = Number(prompt`Please enter your age: `)

if (userAge < 18) {
  console.log(`You are underage`)
} else if (userAge >= 18 && userAge <= 65) {
  console.log(`You are of working age`)
} else {
  console.log(`You are retired`)
}