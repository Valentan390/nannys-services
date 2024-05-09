import axios from "axios";
import { FormData, Nanny } from "../helpers/interfeceData";

const { VITE_FIREBASE_API_KEY, VITE_FIREBASE_PROJECT_ID } = import.meta.env;

const userAuthAPI = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
});

const nannysInstance = axios.create({
  baseURL: `https://${VITE_FIREBASE_PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app/`,
});

const params = {
  key: VITE_FIREBASE_API_KEY,
};

export const registerUserAPI = async (dataUser: FormData) => {
  const userData = {
    email: dataUser.userEmail,
    password: dataUser.userPassword,
    returnSecureToken: true,
  };
  const { data } = await userAuthAPI.post(":signUp", userData, { params });
  return data;
};

export const updateUserAPI = async (idToken: string, dataUser: FormData) => {
  const userData = {
    idToken,
    displayName: dataUser.userName,
    returnSecureToken: true,
  };
  const { data } = await userAuthAPI.post(":update", userData, { params });
  return data;
};

export const loginUserAPI = async (dataUser: FormData) => {
  const userData = {
    email: dataUser.userEmail,
    password: dataUser.userPassword,
    returnSecureToken: true,
  };
  const { data } = await userAuthAPI.post(":signInWithPassword", userData, {
    params,
  });
  return data;
};

export const userDataAPI = async (idToken: { idToken: string }) => {
  const { data } = await userAuthAPI.post(":lookup", idToken, { params });
  return data;
};

export const getNannysAPI: (carrentPage: number) => Promise<Nanny[]> = async (
  carrentPage
) => {
  const { data } = await nannysInstance.get("nanny.json", {
    params: {
      orderBy: '"$key"',
      startAt: `"${carrentPage}"`,
      limitToFirst: 3,
    },
  });
  return Object.values(data);
};

export const addNannyAPI: (
  userid: string,
  nanny: Nanny
) => Promise<Nanny> = async (userId, nanny) => {
  const { data } = await nannysInstance.post(`users/${userId}.json`, nanny);
  return data;
};

export const getNannysFovoritApi: (userId: string) => Promise<Nanny[]> = async (
  userId
) => {
  const { data } = await nannysInstance.get(`users/${userId}.json`);
  if (data === null) {
    return [];
  }
  return Object.values(data) || [];
};

export const getNannysFavoriteDelAPI = async (userId: string) => {
  const { data } = await nannysInstance.get(`users/${userId}.json`);
  return data;
};

export const deleteFavoriteAPI: (
  userId: string,
  nannyId: string
) => void = async (userId, nannyId) => {
  await nannysInstance.delete(`users/${userId}/${nannyId}.json`);
};
