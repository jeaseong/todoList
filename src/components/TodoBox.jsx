import React, {useState} from 'react'
import styled from "styled-components"

//component-child
import TodoTitle from './TodoTitle'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoBox = styled.main`
  position: fixed;
  top: 60px; 
  left: 0;
  right: 0;
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  background-color: skyblue;
`;

export default function Container(){
  const [todos, setTodos] = useState([])
  const [hover, setHover] = useState(false)

  const onComplete = (index) => {
    const newTodo = [...todos]
    newTodo[index].isCompleted = !newTodo[index].isCompleted
    setTodos(cur => newTodo)
  }
  const onRemove = (index) => {
    const newTodo = [...todos]
    newTodo.splice(index, 1)
    setTodos(cur => newTodo)
  }

  const onHover = (index) => {
    const newTodo = [...todos]
    newTodo[index].isHover = !newTodo[index].isHover
    setTodos(cur => newTodo)
  }


  const handleInsert = (value) => {
    setTodos(cur => {
      const inputTodo = {
        key: new Date().getTime(),
        value: value,
        isCompleted: false,
        isHover: false,
      }
      const newList = [...cur, inputTodo]
      return newList
    })
    
  }
  return <TodoBox>
    <TodoTitle title="오늘 안하면 죽음"/>
    <TodoInput onInsert={handleInsert}/>
    <TodoList todoList={todos} onComplete={onComplete} onRemove={onRemove} isHover={onHover}/>
  </TodoBox>
}