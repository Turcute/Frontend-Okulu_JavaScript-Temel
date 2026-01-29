// Ayar Değerlerinden Açık Olanları Sayma

let settings = {
  notifications: true,
  darkMode: false,
  autoSave: true,
  locationAccess: false
};

let values = Object.values(settings);
let count = 0;

for (let i = 0; i < values.length; i++){
  if (values[i] === true)
    count++;
}

console.log(`Total true value: ${count} `)


