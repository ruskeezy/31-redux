'use strict';

import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import {categoryUpdate, categoryDelete} from '../../action/category';
import {expenseCreate} from '../../action/expense';

class CategoryItem extends React.Component {
  renderExpenseItems() {
    return this.props.expenses[this.props.categoryID].map(item => {
      return (
        <ExpenseItem expense={item} />
      );
    });
  }

  render() {
    let {category, categoryUpdate, categoryDelete, expenseCreate} = this.props;

    return (
      <section className='category-item'>
        <div>
          <div>
            <h2>{category.title}</h2>
            <button onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div className='edit'>
            <CategoryForm
              buttonText='Update'
              category={category}
              onComplete={categoryUpdate} />
          </div>
          <div>
            <ExpenseForm
              buttonText='Create'
              categoryID={category.id}
              onComplete={expenseCreate} />
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category)),
  expenseCreate: expense => dispatch(expenseCreate(expense)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);