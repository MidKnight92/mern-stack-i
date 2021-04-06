const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = require("./itemSchema");

const lineItemsSchema = new Schema(
  {
    qty: { type: Number, default: 1 },
    item: itemSchema,
  },
  {
    timestamps: true,
  }
);

// ext means extendedPrice (qty * item price)
lineItemsSchema.virtual("extPrice").get(function () {
  return this.qty * this.item.price;
});

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    lineItems: [lineItemsSchema],
    isPaid: { type: Boolean, default: flase },
  },
  {
    timestamps: true,
  }
);

// Add the following helpful virtuals to order documents
orderSchema.virtual("orderTotal").get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual("totalQty").get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual("orderId").get(function () {
  return this.id.slice(-6).toUpperCase();
});

module.exports = mongoose.Model("Order", orderSchema);
