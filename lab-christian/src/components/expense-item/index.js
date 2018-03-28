'use strict';

import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../category-form';
import {expenseCreate, expenseUpdate, expenseDelete} from '../../action/expense';

class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseUpdate, expenseDelete} = this.props;

    return (
      <section className='expense-item'>
        <div>
          <div>
            <h2>{expense.name}</h2>
            <button onClick={() => expenseDelete(expense)}>X</button>
          </div>
          <div className='edit'>
            <ExpenseForm
              buttonText='update'
              expense={expense}
              onComplete={expenseUpdate} />
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  expenseCreate: expense => dispatch(expenseCreate(expense)),
  expenseUpdate: expense => dispatch(expenseUpdate(expense)),
  expenseDelete: expense => dispatch(expenseDelete(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);