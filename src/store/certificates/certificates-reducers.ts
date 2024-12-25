import { createAsyncThunk, createSlice, GetThunkAPI } from '@reduxjs/toolkit';
import frontEndBasicImg from '../../modules/common/image/certificates-image/frontEndBasic.jpg';
import frontEndPROImg from '../../modules/common/image/certificates-image/FrontEndPro.jpg';
import frontEndReactImg from '../../modules/common/image/certificates-image/FrontEndReact.jpg';
import frontEndVueImg from '../../modules/common/image/certificates-image/FrontEndVue.jpg';
import { v1 } from 'uuid';
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
    certificatesTitile: string;
  },
  undefined
>('certificates/getCertificates', async (_, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const res = await certificatesApi.getCertificates();

    console.log('res.data', res.data[0].certificates);
    return {
      certificates: res.data[0].certificates,
      certificatesTitile: res.data.certificatesTitile,
    };
  } catch (error) {
    return rejectWithValue('Failed to fetch certificates');
  }
});

export const certificatesReducers = slice.reducer;
export const certificatesActions = slice.actions;

export const certificateThunk = { getCertificates };
