// Kullanıcı Onayıyla İlk Elemanı Silme (shift)

let tickets = ["Şifre sıfırlama", "Ödeme hatası", "Hesap kilitlendi"];

let request = ``


let userTicket = prompt(`Would you like to process the first request? (yes/no)`)
if (userTicket == `yes`) {
  request = tickets.shift();
  console.log("Processed request:", request);

} else
  console.log("Remaining tickets:", tickets);


