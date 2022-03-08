import React, {useState, useEffect, useCallback} from 'react'
import styled from "styled-components"

const InputContainer = styled.div`
  margin-bottom: 40px;
`

const Form = styled.form``

const Input = styled.input`
  border: none;
  border-bottom: 1px dotted black;
  background-color: skyblue;
  width: 300px;
  height: 40px;
  font-size: 20px;
  margin-right: 10px;
  &:focus{
    outline: none;
  }
`

const Button = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transform: ${props => props.scale};
  transition: all .2s ease-in-out;
`

export default function TodoInput({onInsert}){
  const [hover, setHover] = useState(false);
  const [todo, setTodo] = useState("")

  const mousehandler = () => {
    setHover(cur => !cur)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    onInsert(todo)
    setTodo("")
  }

  const inputHandler = (e) => {
    setTodo(e.target.value)
  }

  return <InputContainer>
    <Form onSubmit={submitHandler}>
      <Input
        value={todo}
        onChange={inputHandler}
        type="text"
        placeholder="할 일 적어"
      />
        
      <Button
        disabled={todo === "" ? true : false}
        onMouseOver={mousehandler}
        onMouseOut={mousehandler}
        scale={hover ? "scale(1.2)" : "none"}
      >등록</Button>
    </Form>
  </InputContainer>
}