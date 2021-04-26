import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

// nếu có .isRequired thì không cần xét giá trị mặc định
// không có thì cần tạo giá trị mặc định .defaultProps

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
}

function TodoList(props) {
  // Destructuring Props in React
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    // !null => true === Phủ nhận null sẽ return true
    // vì onTodoClick có thể null nên cần kiểm tra
    if (onTodoClick) {
      onTodoClick(todo)
    }
  };

  return (
    <div>
      <ul>
        {
          todos.map( (todo) => (
          <li 
            key={todo.id}
            onClick={ () => handleClick(todo)}
          >
            {todo.title}
          </li>
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;