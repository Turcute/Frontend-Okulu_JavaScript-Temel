// Listenin Başına Yeni Eleman Ekleme (unshift)

let tasks = ["Kod yaz", "Toplantıya gir", "Mail gönder"];

let quest = prompt(`Please enter urgent task`)
  tasks.unshift(quest)

console.log(tasks)