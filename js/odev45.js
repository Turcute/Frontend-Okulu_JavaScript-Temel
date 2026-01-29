// Kullanıcı Ayarlarını Genişletme (Object + Spread)

let baseSettings = {
  theme: "dark",
  notifications: true
};

let newSettings = {
  ...baseSettings,
  language: "tr",
  autoSave: false
};

console.log(baseSettings);
console.log(newSettings);
