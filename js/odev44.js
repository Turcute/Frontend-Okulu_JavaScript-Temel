// Yetkisi Admin Olan Kullanıcıyı Bulma

let users = {
  ali: "user",
  ayse: "editor",
  veli: "admin",
  mehmet: "user"
};

for (let [username, role] of Object.entries(users)) {
  if (role === `admin`){
    console.log(`Person with admin role: ${username}`);
    break;
  }
}