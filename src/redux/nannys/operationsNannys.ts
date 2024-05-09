import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getNannysAPI } from "../../services/APIservices";
import { Nanny } from "../../helpers/interfeceData";

export const getNannysThunk = createAsyncThunk<
  Nanny[],
  number,
  { rejectValue: string }
>("nanny/getnanny", async (credentials, thunkAPI) => {
  try {
    const res = await getNannysAPI(credentials);
    return res;
  } catch (error: any) {
    toast.error(`${error.message}`);
    return thunkAPI.rejectWithValue(`${error.message}`);
  }
});
