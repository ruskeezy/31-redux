'use strict';

import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import {categoryUpdate, categoryDelete} from '../../action/category';
import {expenseCreate} from '../../action/expense';

class CategoryItem extends React.Component {
  renderExpenseItems() {

  }

  render() {
    let {category, categoryUpdate, categoryDelete} = this.props;

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
              categoryID={category.ID}
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
});

export default connect(null, mapDispatchToProps)(CategoryItem);