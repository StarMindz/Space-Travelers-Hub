import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchMissions = createAsyncThunk('mission/fetchMissions', () => axios.get('https://api.spacexdata.com/v3/missions')
  .then((response) => {
    const dataInfo = response.data;
    return dataInfo;
  }));

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => action.payload);
  },
});

export default missionSlice.reducer;
