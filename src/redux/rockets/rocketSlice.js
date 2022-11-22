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
    }));
    return dataInfo;
  }));

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

export default rocketSlice.reducer;
