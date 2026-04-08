const names = [];
const surnames = [];
const addresses = [];
const phones = [];
const emails = [];


let choice;

while (choice !== "2") {
  choice = prompt(`
    1 - Add record
    2 - Exit`
  );

  if (choice === "1") {
    addUser();
  }
}

function addUser() {
  const name = prompt("Ad:");
  const surname = prompt("Soyad:");
  const address = prompt("Adres:");
  const phone = prompt("Telefon:");
  const email = prompt("E-posta:");

  names.push(name);
  surnames.push(surname);
  addresses.push(address);
  phones.push(phone);
  emails.push(email);

  renderUsers();
}

function renderUsers() {
  const userList = document.getElementById("userList");

  userList.innerHTML = ""; 

  for (let i = 0; i < names.length; i++) {
    userList.innerHTML += `
      <div class="card">
        <h3>${names[i]} ${surnames[i]}</h3>
        <p>Adres: ${addresses[i]}</p>
        <p>Telefon: ${phones[i]}</p>
        <p>Email: ${emails[i]}</p>
      </div>
    `;
  }
}