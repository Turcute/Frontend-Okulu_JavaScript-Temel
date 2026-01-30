// Yetkili Kargo Yönetim Sistemi - Bölüm Sonu Canavarı

let users = {
  ali: `admin`,
  ayse: `user`,
  mehmet: `user`
};

let newUser = prompt(`Please enter your name:`);

if (!(newUser in users)) {
  console.log(`User not found`);
} else if (users[newUser] === `admin`) {


  let senderName = prompt(`Please enter sender name:`);
  let receiverName = prompt(`Please enter receiver name:`);
  let receiverCity = prompt(`Please enter receiver city:`);
  let receiverDistrict = prompt(`Please enter receiver district:`);
  let shippingCompany = prompt(`Please enter shipping company:`);
  let shippingTrack = prompt(`Please enter track number:`);


  let cargo = {
    sender: senderName,
    receiver: {
      name: receiverName,
      address: {
        city: receiverCity,
        district: receiverDistrict
      }
    },
    company: shippingCompany,
    trackingNumber: shippingTrack
  };


  let updatedCargo = {
    ...cargo,
    status: `Prepared`
  };


  let entries = Object.entries(updatedCargo);

  for (let i = 0; i < entries.length; i++) {
    console.log(entries[i][0], ":", entries[i][1]);
  }


  let { name, ...addressInfo } = updatedCargo.receiver;

  console.log(`Receiver Name:`, name);
  console.log(`Address Info:`, addressInfo);

} else {
  console.log(`You are not authorized`);
}
