import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormData, UserData, UserLogin } from "../../helpers/interfeceData";
import {
  loginUserAPI,
  registerUserAPI,
  updateUserAPI,
  userDataAPI,
} from "../../services/APIservices";
import { toast } from "react-toastify";

export const registerUserThunk = createAsyncThunk<
  UserLogin,
  FormData,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const res = await registerUserAPI(credentials);
    const idToken = res.idToken;
    const result = await updateUserAPI(idToken, credentials);
    toast.success("You have successfully registered.");
    return { ...result, idToken };
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const logInUserThunk = createAsyncThunk<
  UserLogin,
  FormData,
  { rejectValue: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const data = await loginUserAPI(credentials);
    toast.success("You have successfully logged in.");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const getUserDataThunk = createAsyncThunk<
  UserData,
  { idToken: string },
  { rejectValue: string }
>("auth/userData", async (credentials, thunkAPI) => {
  try {
    const data = await userDataAPI(credentials);
    console.log(data);

    return data.users[0];
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`User data has not been updated.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
