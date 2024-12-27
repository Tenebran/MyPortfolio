import socialNetwork from '../../modules/common/image/social-network.jpg';
import goSerfImage from '../../modules/common/image/go-surf.jpg';
import konstruktImage from '../../modules/common/image/konstrukt.jpg';
import marioImage from '../../modules/common/image/mario.jpg';
import bathmanImage from '../../modules/common/image/bathman.jpg';
import newYorkerImage from '../../modules/common/image/new-yorker.jpg';
import developmentImage from '../../modules/common/image/development-project.jpg';
import cardsImage from '../../modules/common/image/cards.jpg';
import daytrackImage from '../../modules/common/image/daytrack-.jpg';
import weatherVue from '../../modules/common/image/WeatherVue.jpg';
import sneakerVue from '../../modules/common/image/SNEAKERVUE.jpg';
import { v1 } from 'uuid';
import { createAsyncThunk, createSlice, Reducer } from '@reduxjs/toolkit';
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
