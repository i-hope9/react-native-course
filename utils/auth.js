import axios from "axios";

const API_KEY = "AIzaSyCcPmSmLuLb6Tpjo4J5eD_maEKTT78o0S8";

async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );

  console.log(response.data);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}
