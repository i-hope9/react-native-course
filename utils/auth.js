import axios from "axios";

const API_KEY = "";

async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );

  return response.data.idToken;
}

export async function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

export async function createUser(email, password) {
  return authenticate("signUp", email, password);
}
