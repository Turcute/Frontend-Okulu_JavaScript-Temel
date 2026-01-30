// Sabit Ayarları Ayır, Kullanıcı Tercihlerini Topla (Object + Rest)

let config = {
  appName: "FrontendApp",
  version: "1.2.0",
  theme: "dark",
  language: "tr",
  autoSave: true
};

let {appName, version, ...userPreferences } = config

console.log(`App name: ${appName}`);
console.log(`App version: ${version}`);
console.log(`userPreferences: `, userPreferences);