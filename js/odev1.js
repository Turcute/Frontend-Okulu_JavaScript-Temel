// Ürün Fiyat Bilgisi Oluşturma

let productName = 'Laptop'
let productPrice = 1500
let productQuantity = 12
let discount = 0.10
let discountAmount = productPrice * discount;

console.log (`Total Price: ${productPrice * productQuantity}`)
console.log (`Discount Amount: ${discountAmount}`)
console.log (`Discounted Total Price: ${productPrice - discountAmount }`)