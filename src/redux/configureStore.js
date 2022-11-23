import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rocketSlice';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

const preloadedState = {
  missions: [],
  // rockets: [],
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [logger, thunk, ...getDefaultMiddleware()],
  preloadedState,
});

export default store;
