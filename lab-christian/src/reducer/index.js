'use strict';

import {combineReducers} from 'redux';
import expensesReducer from './card
import categoriesReducer from './category';

export default combineReducers({
  cards: cardsReducer,
  categories: categoriesReducer
});

