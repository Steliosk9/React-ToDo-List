import React, { Component } from 'react';

class FakeItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li
        style={{ opacity: 0.3 }}
        className='list-group-item d-flex justify-content-between my-2'
      >
        <h6>{item}</h6>
        <div className='todo-icon'>
          <span className='mx-2 text-success'>
            <i className='fa fa-pencil'></i>
          </span>
          <span className='mx-2 text-danger'>
            <i className='fa fa-trash'></i>
          </span>
        </div>
      </li>
    );
  }
}

export default FakeItem;