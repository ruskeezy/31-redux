'use strict';

import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense ? this.props.expense : { name: '', price: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, {...this.state, categoryID: this.props.categoryID}));
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input 
          name='name'
          type='text'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange} />

        <input 
          name='price'
          type='number'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange} />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;