import { profileReducers } from './profile/profile-reducers';
import { skillsReducer } from './skills/skills-reducers';
import { footerReducer } from './footer/footer-reduser';
import { certificatesReducers } from './certificates/certificates-reducers';
import { configureStore } from '@reduxjs/toolkit';
import { projectsReducers } from './projects/projects-reducers';

export const store = configureStore({
  reducer: {
    projects: projectsReducers,
    profile: profileReducers,
    skills: skillsReducer,
    footer: footerReducer,
    certificates: certificatesReducers,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type AppRootStateType = ReturnType<typeof store.getState>;

// @ts-expect-error   is necessary.
window.store = store;
