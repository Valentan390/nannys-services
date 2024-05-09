import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Nanny } from "../../helpers/interfeceData";
import {
  addNannyAPI,
  deleteFavoriteAPI,
  getNannysFavoriteDelAPI,
  getNannysFovoritApi,
} from "../../services/APIservices";

export const addFaforiteNanny = createAsyncThunk<
  Nanny,
  { userId: string; nanny: Nanny },
  { rejectValue: string }
>("nanny/addFavorite", async ({ userId, nanny }, thunkAPI) => {
  try {
    const res = await addNannyAPI(userId, nanny);

    if (!res) {
      throw new Error("User not found");
    }
    return { ...nanny, id: res.name };
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    toast.error(errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const getFavoriteNannys = createAsyncThunk<
  Nanny[],
  string,
  { rejectValue: string }
>("nannys/getFavorite", async (userId, thunkAPI) => {
  try {
    const res = await getNannysFovoritApi(userId);
    if (!res) {
      throw new Error("User not found");
    }
    return res;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    toast.error(errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const deleteFavoriteNanny = createAsyncThunk<
  Nanny,
  { userId: string; nannyName: string },
  { rejectValue: string }
>("nanny/deleteFavorite", async ({ userId, nannyName }, thunkAPI) => {
  try {
    const userData: Record<string, Nanny> = await getNannysFavoriteDelAPI(
      userId
    );

    if (!userData) {
      throw new Error("User not found");
    }

    const nannyId = Object.keys(userData).find(
      (key: string) => userData[key]?.name === nannyName
    );

    if (!nannyId) {
      throw new Error("Nanny not found for this user");
    }
    await deleteFavoriteAPI(userId, nannyId);
    return { id: nannyId, ...userData[nannyId] };
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    toast.error(errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
