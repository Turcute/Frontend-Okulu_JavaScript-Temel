// Yetkiye Göre Objeye Yeni Kullanıcı Ekleme

let users = {
  ali: "admin",
  ayse: "user",
  mehmet: "user"
};

let newUser = prompt("Please enter your name:");

if (!(newUser in users)) {
  console.log("User not found");
} else {
  if (users[newUser] === "admin") {
    let addedUser = prompt("Enter the new user's name:");
    let addedRole = prompt("Enter role for the new user (admin/user):");

    users[addedUser] = addedRole;
    console.log("Updated users:", users);
  } else {
    console.log("You don't have permission to add");
  }
}
