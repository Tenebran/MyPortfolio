import { projectsReducers } from './projects-reducers';
import { combineReducers, createStore } from 'redux';
import { profileReducers } from './profile-reducers';

const rootReducer = combineReducers({
  projects: projectsReducers,
  profile: profileReducers,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
