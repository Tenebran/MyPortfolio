import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { AppDispatchType, AppRootStateType } from '../../store/store';

export const useAppDispatch: () => AppDispatchType = useDispatch;
