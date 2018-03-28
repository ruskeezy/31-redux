'use strict';

import React from 'react';
import {connect} from 'react-redux';

import { categoryCreate, categoryUpdate, categoryDelete } from '../../action/category';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item/index';

class Dashboard extends React.Component {
  render() {
    return (
      <main className='main'>
        <h1>Create Category</h1>

        <CategoryForm 
          buttonText='Create category'
          onComplete={this.props.categoryCreate} />

        {this.props.categories.map( item => 
          <div key={item.id}>
            <CategoryItem 
              category={item}
              title={item.title} />
          </div>
        )}
      </main>
    );
  }
}


const mapStateToProps = state => {
  return {
    categories: state.categories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);