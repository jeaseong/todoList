import React, {useState} from 'react'
import styled from "styled-components"

const TodoBoard = styled.div`
  
`

const List = styled.ul``

const Item = styled.li`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Value = styled.span`
  max-width: 200px;
  text-align: left;
  color: ${props => props.color};
  transition: all .2s ease-in-out;
`

const Button = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  text-align: center;
  transform: ${props => props.scale};
  transition: all .2s ease-in-out;
`

export default function TodoList({todoList, onComplete, onRemove, isHover}){
  const [whatButton, setButton] = useState("")
  return <TodoBoard>
    <List>
      {todoList.map((item, index) => {
        return <Item key={item.key}>
          <Value
            color={item.isCompleted ? "red" : ""}
          >{item.value}</Value>
          <div>
          <Button
            type="button"
            onMouseOver={() => {
              isHover(index)
            }}
            onMouseOut={() => {
              isHover(index)
            }}
            onClick={() => {
              onComplete(index)
            }}
            scale={item.isHover ? "scale(1.2)" : "none"}
          >✅</Button>
          <Button
            onMouseOver={() => {
              isHover(index)
            }}
            onMouseOut={() => {
              isHover(index)
            }}
            scale={item.isHover ? "scale(1.2)" : "none"}
            type="button"
            onClick={() => {
              onRemove(index)
            }}
          >🚫</Button>
          </div>
        </Item>
      })}
    </List>
  </TodoBoard>
}