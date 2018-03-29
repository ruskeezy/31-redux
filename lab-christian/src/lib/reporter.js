'use strict';

const reporter = store => next => action => {
  try {
    let result = next(action);
    console.log(store.getState());
    return result;
  } catch (err) {
    err.action = action;
    console.error(err);
    return err;
  }
};

export default reporter;