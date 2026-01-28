// Kargo Gönderi ve Alıcı Bilgileri (2 Katmanlı Nested Object)

let senderName = prompt(`Please enter sender name: `)
let recipientName = prompt(`Please enter recipient name: `)
let recipientCity = prompt(`Please enter recipient city: `)
let recipientDistrict = prompt(`Please enter recipient district: `)
let shippingCompany = prompt(`Please enter shipping company name: `)
let shippingTracking = Number(prompt(`Please enter shipping tracking number: `))

let shipping = {
  sender: senderName,

  recipient: {
    name: recipientName,

    address: {
      city: recipientCity,
      district: recipientDistrict
    }
  },

  shipment: {
    company: shippingCompany,
    trackNumber: shippingTracking
  }

}

console.log(`Sender name: ${shipping.sender}`)
console.log(`Recipient name: ${shipping.recipient.name}`)
console.log(`City: ${shipping.recipient.address.city} , District: ${shipping.recipient.address.district}`
);
console.log(`Shipping company: ${shipping.shipment.company}`)
console.log(`Track number: ${shipping.shipment.trackNumber}`)

