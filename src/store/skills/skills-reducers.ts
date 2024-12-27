import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { skillsApi } from './skills-api';

const slice = createSlice({
  name: 'skills',
  initialState: {
    skills: [] as SkillsType[],
    skillTitle: 'SKILLS',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSkills.fulfilled, (state, action) => {
      if (action.payload.skills) {
        state.skills = action.payload.skills;
      }
    });
  },
});

const getSkills = createAsyncThunk<{ skills: SkillsType[] }, undefined>(
  'skills/getSkills',

  async (_, thukApi) => {
    const { rejectWithValue } = thukApi;

    try {
      const res = await skillsApi.getSkills();
      return { skills: res.data };
    } catch {
      return rejectWithValue('Failed to fetch skills');
    }
  }
);

export type SkillInitialStateType = {
  skills: Array<SkillsType>;
  skillTitle: string;
};

export type SkillsType = {
  id: string;
  skillTitle: string;
  skillDescription: string;
  svgIcon: string;
};

export const skillsReducer = slice.reducer;
export const skillActions = slice.actions;

export const skillsThunk = { getSkills };
