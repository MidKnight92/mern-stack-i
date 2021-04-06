//Purpose of module:  Dedicated to making AJAX Request
import sendRequest from "./send-request";

// This the base path of the Express route we'll define
const BASE_URL = "/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
// Testing purposes only not need in apps
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
