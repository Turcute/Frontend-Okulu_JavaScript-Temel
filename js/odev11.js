// Kullanıcı “evet” Diyene Kadar Devam Eden Prompt (do while ile)

do {
  askUser = prompt(`Would you like to continue (yes/no)`);
} while (askUser !== `yes`);

console.log(`ongoing`);
