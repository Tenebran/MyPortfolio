import { projectsReducers } from './projects-reducers';
import { combineReducers, createStore } from 'redux';
import { profileReducers } from './profile-reducers';
import { skillsReducer } from './skills-reducers';
import { footerReducer } from './footer-reduser';

const rootReducer = combineReducers({
  projects: projectsReducers,
  profile: profileReducers,
  skills: skillsReducer,
  footer: footerReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
