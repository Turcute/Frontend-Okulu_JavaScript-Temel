// Basit Kullanıcı Yönetim Sistemi 

let names = [`Nihat`, `Orhan`, `Furkan`];
let surname = [`Duysak`, `Ekici`, `Ozay`];
let ages = [29, 29, 29];

searchUser = () => {
  let searchName = prompt(`Enter the name of the user you want to search for:`);
  searchName = searchName.toLowerCase();

  let findIndex = -1

  for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase() === searchName) {
      findIndex = i;
      break;
    }
  }

  if (findIndex === -1) {
    alert(`User not found`);
  } else {
    alert(
      `Name ${names[findIndex]}, Surname ${surname[findIndex]}, Age ${ages[findIndex]}`
    )
  }
}

addUser = () => {
  let newUserName = prompt(`Please enter the name you wish to add`)
  let newUserSurname = prompt(`Please enter the surname you wish to add`)
  let newUserAge = Number(prompt(`Please enter the age`))

  names.push(newUserName);
  surname.push(newUserSurname);
  ages.push(newUserAge);

  alert(`User added successfully
Name: ${newUserName}
Surname: ${newUserSurname}
Age: ${newUserAge}`);
}

deleteUser = () => {
  let userDelete = prompt(`Please enter the name you wish to delete`);
  userDelete = userDelete.toLowerCase();

  let findIndex = -1;

  for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase() === userDelete) {
      findIndex = i;
      break;
    }
  }

  if (findIndex === -1) {
    alert(`User not found`);
  } else {
    let deletedName = names[findIndex];
    let deletedSurname = surname[findIndex];
    let deletedAge = ages[findIndex];

    names.splice(findIndex, 1);
    surname.splice(findIndex, 1);
    ages.splice(findIndex, 1);

    alert(
      `User deleted successfully\nName: ${deletedName}\nSurname: ${deletedSurname}\nAge: ${deletedAge}`
    );
  }
}

userUpdate = () => {
  let updateUser = prompt(`Enter the username of the user you wish to update.`);
  updateUser = updateUser.toLowerCase();

  let findIndex = -1

  for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase() === updateUser) {
      findIndex = i;
      break;
    }
  }

  if (findIndex === -1) {
    alert(`User not found`)

  } else {
    let newName = prompt(`Enter the new name`);
    let newSurname = prompt(`Enter the new surname`);
    let newAge = Number(prompt(`Enter the new age`));

    names[findIndex] = newName;
    surname[findIndex] = newSurname;
    ages[findIndex] = newAge;

    alert(
      `User updated successfully\nName: ${names[findIndex]}\nSurname: ${surname[findIndex]}\nAge: ${ages[findIndex]}`
    )
  }
}

listUsers = () => {
  if (names.length === 0) {
    alert("No users found");
    return;
  }

  let allUsers = "";
  for (let i = 0; i < names.length; i++) {
    allUsers += `User ${i + 1}:\nName: ${names[i]}\nSurname: ${surname[i]}\nAge: ${ages[i]}\n\n`;
  }

  alert(allUsers);
}



let userManagement = true;

while (userManagement) {

  let choose = prompt(`-Select the action you wish to perform-
  1- User Search
  2- Adding New User
  3- User Delete
  4- User Update
  5- List Users
  0- Exit`);

  if (choose === `1`) {
    searchUser();
  } else if (choose === `2`) {
    addUser();
  } else if (choose === `3`) {
    deleteUser();
  } else if (choose === `4`) {
    userUpdate();
  } else if (choose === `5`) {
    listUsers();
  } else if (choose === `0`) {
    userManagement = false;
    alert(`Exiting the program`);
  } else {
    alert(`Invalid option, please try again`)
  }
}


