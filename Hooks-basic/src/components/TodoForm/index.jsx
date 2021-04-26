import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

// không có .isRequired thì phải có .default
TodoForm.defaultProps = {
  onSubmit: null,
}

function TodoForm(props) {
  const { onSubmit } = props;
  // value đầu tiên gán trỗng
  const [value, setValue ] = useState('');

  function handleChange(e) {
    // in ra xem value mình nhập
    console.log(e.target.value);
    // nhìn cái value khi set nhưng liên tục
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    // trình duyệt re-load ==> Prevent reloading browser
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };
    onSubmit(formValues);
  }

  return (
    <div>
      <form action="" onClick={handleSubmit}>
        <input 
          type="text" 
          value={value} 
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default TodoForm;