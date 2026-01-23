// Ayar Silme Yetkisi (Property Silme)

let settings = {
  theme: "dark",
  notifications: true,
  debug: true
};

let userAsk = confirm(`Do you want the delete debug property?`)
if (userAsk === true ){
  delete settings.debug 
  console.log(settings)
}else{
  console.log(settings)
}
