import { Client, Account, ID } from "appwrite";
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("65ae5db721b4d9e04d0c"); // Your project ID

const account = new Account(client);

const userSignUp = (email, name, password) => {
  try {
    const promise = account.create(ID.unique(), email, password, name);

    return promise;
  } catch (error) {
    console.log("signup Error", error);
    return error;
  }
};

const userlogin = (email, password) => {
  try {
    const promise = account.createEmailSession(email, password);

    return promise;
  } catch (error) {
    console.log("loginUser Error", error);
  }
};

const getUser = async () => {
  try {
    const promise = await account.get();

    return promise;
  } catch (error) {
    console.log("logout Error", error);
  }
};

const userlogout = async () => {
  try {
    const promise = await account.deleteSessions();

    return promise;
  } catch (error) {
    console.log("logout Error", error);
  }
};
export { userSignUp, userlogin, userlogout, getUser };
