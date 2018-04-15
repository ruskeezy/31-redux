'use strict';

const validateExpense = store => next => action => {
  const isExpense = action.type && action.type.startsWith('EXPENSE');
  console.log(action);

  if(isExpense) {
    try {
      const expense = action.payload;
      const notValidated = !expense.id || !expense.name || !expense.price;
      if (notValidated) {
        throw new Error('VALIDATION ERROR: expense must include id, name, and price');
      } else {
        return next(action);
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    return next(action);
  }
};

export default validateExpense;