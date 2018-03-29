'use strict';

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []}
    case 'CATEGORY_DELETE':
      return {...state, [payload.id] : undefined}
    case 'EXPENSE_CREATE':
      console.log(payload);
      var categoryID = payload;
      var categoryExpenses = state[categoryID];
      return {...state, [categoryID]: [...categoryExpenses, payload]};
    case 'EXPENSE_UPDATE':
      var categoryID = payload;      
      var updatedExpenses = state[categoryID].map(item => {
        return (item.id === payload.id ? payload : item)
      });
      return {...state, [categoryID]: updatedExpenses} 
    case 'EXPENSE_DELETE':
      var categoryID = payload;
      var updatedExpenses = state[categoryID].filter(item => {
        return (item.id !== payload.id)
      });
      return {...state, [categoryID]: updatedExpenses}
    default:
      return state;
  }
}
