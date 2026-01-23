// Ayarlar Mantığını Object ile Modelleme
let appTheme = prompt(`Select your theme Dark/Light`)
let appNotification = prompt(`Should notifications be enabled? True/False`)
let appLanguage = prompt (`Write your language`)





let appSettings = {
  Theme: appTheme,
  Notification: appNotification,
  Language: appLanguage
}

console.log(appSettings)