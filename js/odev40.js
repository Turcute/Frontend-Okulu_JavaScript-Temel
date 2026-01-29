// Ayar Kontrolü – Kaç Tane Ayar Var?

let settings = {
  theme: "dark",
  notifications: true,
  language: "tr",
  autoSave: false
};

let keys = Object.keys(settings);

console.log(`Total number of settings: ${keys.length}`)

