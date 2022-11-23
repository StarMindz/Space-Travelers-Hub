import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import fetchMissionsFromAPI from '../../utils/fetchMissionsFromAPI';

const initialState = [];

export const fetchMissions = createAsyncThunk('mission/fetchMissions', () => axios.get('https://api.spacexdata.com/v3/missions')
  .then((response) => {
    const mission = response.data;
    const dataInfo = mission.map((data) => ({
      id: Number(data.mission_id),
      name: data.mission_name,
      description: data.mission_description,
    }));
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
export { fetchMissions };