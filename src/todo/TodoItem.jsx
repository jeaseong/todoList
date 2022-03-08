import styled from "styled-components"

const Item = styled.div``

const Todo = styled.div``

const Text = styled.span``

const Button = styled.button``

export default function TodoItem(){
  return <Item>
    <Todo>
      <Text>안녕하세요~</Text>
      <Button>완료</Button>
      <Button>삭제</Button>
    </Todo>
  </Item>
}