// const Order = require('../../models/order');
// const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  checkout,
  setItemQtyInCart,
};

async function cart(req, res) {
  // A cart is the unpaid order for a user
}

async function addToCart(req, res) {
  // Add the item to the cart
}

async function checkout(req, res) {
  // Updates an item in the cart's qty
}

async function setItemQtyInCart(req, res) {
  // Update the car's isPaid propety to true
}
