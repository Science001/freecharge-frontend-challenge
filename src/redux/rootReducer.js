import { combineReducers } from '@reduxjs/toolkit';

import recipeReducer from './recipeReducer';

const rootReducer = combineReducers({ recipe: recipeReducer });

export default rootReducer;
