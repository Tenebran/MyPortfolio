import { projectsReducers } from './projects-reducers';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  projects: projectsReducers,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
