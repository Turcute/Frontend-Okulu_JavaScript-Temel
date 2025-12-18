// Kullanıcı Rolüne Göre Yetki Yazdırma (switch)

let userRole = prompt(`Please enter your role: `)

switch(userRole) {
  case (userRole = `admin`):
    console.log(`You have all authority`)
  break;

  case (userRole = `editor`):
  console.log(`You can edit the content`)
  break;

  case(userRole = `user`):
  console.log(`You can only view it`)
  break;

  default:
    console.log(`Invalid role`)
}