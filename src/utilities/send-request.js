import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const options = { method };
  console.log(options);
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  // Add the token
  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // prefacing with "Bearer" is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  //   res.ok will be false if the status code set 4XX in the controller
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
