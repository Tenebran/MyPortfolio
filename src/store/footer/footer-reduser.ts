import { v1 } from 'uuid';
import {
  CodewarsIcon,
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
} from '../../modules/common/icons/icons';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { footerApi } from './footer-api';

const slice = createSlice({
  name: 'footer',
  initialState: [{ link: '', icon: '', id: '' }],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFooter.fulfilled, (state, action) => {
      if (action.payload.footer) {
        return action.payload.footer;
      }
    });
  },
});

const getFooter = createAsyncThunk<{ footer: FooterType[] }, undefined>(
  'footer/getFooter',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const res = await footerApi.getFooter();
      return { footer: res.data };
    } catch {
      return rejectWithValue('Failed to fetch footer');
    }
  }
);

export type ActionType = {
  type: 'FOOTER/GET-FOOTER';
};

export type FooterType = {
  link: string;
  icon: string;
  id: string;
};

export const footerReducer = slice.reducer;
export const footerActions = slice.actions;

export const footerThunk = { getFooter };
