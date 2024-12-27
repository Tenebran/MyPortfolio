import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { certificatesApi } from './certificates-api';

type CertificatesState = {
  certificates: CertificatesType[];
  certificatesTitile: string;
};

const initialState: CertificatesState = {
  certificates: [],
  certificatesTitile: 'CERTIFICATES',
};

const slice = createSlice({
  name: 'certificates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCertificates.fulfilled, (state, actions) => {
      if (actions.payload.certificates) {
        state.certificates = actions.payload.certificates;
      }
    });
  },
});

export type CertificatesType = {
  id: string;
  image: string;
  title: string;
  subTitle?: string;
  technologies?: string;
  link?: string | null;
  githubLink?: string;
};

export type CertificatesInitialStateType = {
  certificates: Array<CertificatesType>;
  certificatesTitile: string;
};

const getCertificates = createAsyncThunk<
  {
    certificates: CertificatesType[];
  },
  undefined
>('certificates/getCertificates', async (_, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const res = await certificatesApi.getCertificates();

    return {
      certificates: res.data,
    };
  } catch {
    return rejectWithValue('Failed to fetch certificates');
  }
});

export const certificatesReducers = slice.reducer;
export const certificatesActions = slice.actions;

export const certificateThunk = { getCertificates };
