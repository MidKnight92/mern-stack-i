import sendRequest from "./send-request";

const BASE_URL = "/api/orders";

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Retrieve an unpaid order for the logged in user
export function addItemToCart(itemId) {
  // just send itemId for best securtiy (no pricing)
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, "POST");
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sendin infor via the data payload instead of a long URL
export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, "PUT", { itemId, newQty });
}

// Updates the order's (cart's) isPadi property to true
export function checkout() {
  // return data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, "POST");
}
