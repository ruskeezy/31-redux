'use strict';

import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../category-form';
import {expenseUpdate, expenseDelete} from '../../action/expense';

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
  categoryUpdate: category => dispatch(expenseUpdate(category)),
  categoryDelete: category => dispatch(expenseDelete(category)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);