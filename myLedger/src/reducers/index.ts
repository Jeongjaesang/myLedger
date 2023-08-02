import { combineReducers } from 'redux';
import { ProductReducer } from './productReducer';

const rootReducer = combineReducers({ ProductReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
