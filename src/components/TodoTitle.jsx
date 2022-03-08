import styled from "styled-components"

const Title = styled.h1`
  font-size: 40px;
  padding:30px 0 ;
`

export default function TodoTitle({title}){
  return <Title>
    {title}
  </Title>
}