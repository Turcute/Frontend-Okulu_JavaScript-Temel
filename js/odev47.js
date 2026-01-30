// Kullanıcıdan Gelen Ek Bilgileri Toplama (Object + Rest)

let user = {
  isim: "Ayşe",
  yas: 26,
  sehir: "İstanbul",
  meslek: "Designer",
  calisiyorMu: true
};

let {isim, yas, ...otherInformation } = user

console.log(`name: ${isim}`);
console.log(`age: ${yas}`);
console.log(`All information:` , otherInformation);