// Doğru Şifre Girene Kadar Sormak (do while ile)


const correctPassword = `strongPassword`;
let userPassword = ``

do{
  userPassword = prompt(`Please enter your password:`)
}while(userPassword !== correctPassword)
  console.log(`Login successful `)
  
  


