//Purpose of module: Dedciated to Business (Application) Logic

import * as usersAPI from './users-api';

export async function signUp(userData) {
    try {
        // Delegate the network request code to the users-api.js API module 
        // which will ultimately return a JSON Web Token (JWT)
        const token = await usersAPI.signUp(userData);

    } catch {
        throw new Error('Invalid Sign Up');
    }
}
