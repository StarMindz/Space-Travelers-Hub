import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', () => axios.get('https://api.spacexdata.com/v3/rockets')
  .then((response) => {
    const rocket = response.data;
    const dataInfo = rocket.map((data) => ({
      id: Number(data.id),
      name: data.rocket_name,
      description: data.description,
      image: data.flickr_images,
      reserved: false,
    }));
    return dataInfo;
  }));

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.find((rocket) => Number(rocket.id) === Number(action.payload));
      rocket.reserved = !rocket.reserved;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

export default rocketSlice.reducer;
export const { reserveRocket } = rocketSlice.actions;
