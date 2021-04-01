//Purpose of module:  Dedicated to making AJAX Request

// This the base path of the Express route we'll define
const BASE_URL = '/api/users';

export async function signUp(userData){
    // Fetch uses an option object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // Fetch requires data payloads to be stringified 
        // and assigned to a body property on the option object
        body: JSON.stringify(userData)
    });
    // Check if request was successful
    if (res.ok){
        // res.json() will resolve to the JWT
        return res.json();
    } else {
        throw new Error('Invalid Sign Up');
    }
}