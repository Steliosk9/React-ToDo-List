import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import FakeItem from './FakeItem';

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className='list-group my-5'>
        <h3 className='text-center'>Todo List</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        {items === undefined || items.length === 0 ? (
          <Fragment>
            <FakeItem item={'Wake Up'} />
            <FakeItem item={'Make Breakfast'} />
            <FakeItem item={'Read Book'} />
          </Fragment>
        ) : (
          <button
            type='button'
            className='btn btn-danger btn-block'
            onClick={clearList}
          >
            Clear List
          </button>
        )}
      </ul>
    );
  }
}

export default TodoList;
