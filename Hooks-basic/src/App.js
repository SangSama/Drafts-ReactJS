import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  // State: todoList và todoList luôn thay đổi
  const [ todoList, setTodoList ] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex( item => item.id === todo.id);
    // không tìm thấy thì index = -1, tìm thấy index >= 0
    if (index < 0) return;

    // khi thay đổi state thì cần clone ra 1 state mới rồi thay đổi trên đó chứ không thay đổi trên state cũ
    const newTodoList = [...todoList];
    // splice() xóa hoặc thêm vào mảng ===> xóa 1 phần tử tại vị trí index
    newTodoList.splice(index, 1);
    // set lại giá trì bằng cách gọi hàm setTodoList()
    setTodoList(newTodoList);
  };

  function handleTodoValueChange() {

  }

  return (
    <div className="App">
      <h1> React Hooks - Todo List </h1>

      <TodoForm onSubmit={handleTodoValueChange}/>

      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
