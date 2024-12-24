import { projectsReducers } from './projects/projects-reducers';
import { profileReducers } from './profile/profile-reducers';
import { skillsReducer } from './skills-reducers';
import { footerReducer } from './footer-reduser';
import { certificatesReducers } from './certificates/certificates-reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    projects: projectsReducers,
    profile: profileReducers,
    skills: skillsReducer,
    footer: footerReducer,
    certificates: certificatesReducers,
  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

// @ts-expect-error   is necessary.
window.store = store;
