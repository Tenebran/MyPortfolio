import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { projectsApi } from './projects-api';

const slice = createSlice({
  name: 'projects',
  initialState: {
    projects: [] as ProjectsType[],
    projectsTitle: 'PROJECTS',
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProjects.fulfilled, (state, actions) => {
      if (actions.payload.projects) state.projects = actions.payload.projects;
    });
  },
});

const getProjects = createAsyncThunk<{ projects: ProjectsType[] }, undefined>(
  'projects/getProjects',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await projectsApi.getProjects();

      return { projects: res.data };
    } catch {
      return rejectWithValue('Failed to fetch projects');
    }
  }
);

export type ProjectsType = {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  technologies: string;
  link: string | null;
  githubLink: string;
};

export type ProjectsInitialStateType = {
  projects: Array<ProjectsType>;
  projectsTitle: string;
};

export const projectsReducers = slice.reducer;
export const projectsActions = slice.actions;
export const projectsThunks = { getProjects };
