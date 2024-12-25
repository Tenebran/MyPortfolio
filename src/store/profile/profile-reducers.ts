import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { profileApi } from './profile-api';

export type ProfileType = {
  name: string;
  surname: string;
  profession: string;
  image: string;
};

const slice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      name: '',
      surname: '',
      profession: '',
      image: '',
    } as ProfileType,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      if (action.payload.profile) {
        state.profile = action.payload.profile;
      }
    });
  },
});

const getProfile = createAsyncThunk<{ profile: ProfileType }, undefined>(
  'profile/getProfile',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await profileApi.getProfile();

      return { profile: res.data[0] };
    } catch {
      return rejectWithValue('Failed to fetch profile');
    }
  }
);

export const profileReducers = slice.reducer;
export const profileActions = slice.actions;
export const profileThunks = { getProfile };
