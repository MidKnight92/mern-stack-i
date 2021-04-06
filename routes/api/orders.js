const express = require("express");
const router = express.Router();
const ordersCrtl = require("../../controllers/api/orders");

// GET /api/orders/cart
router.get("/cart", ordersCrtl.cart);

// POST /api/orders/cart/items/:id
router.post("/cart/items/:id", ordersCrtl.addToCart);

// POST /api/orders/cart/checkout
router.post("/cart/checkout", ordersCrtl.checkout);

// PUT /api/orders/cart/qty
router.put("/cart/qty", ordersCrtl.setitemQtyInCart);

module.exports = router;
