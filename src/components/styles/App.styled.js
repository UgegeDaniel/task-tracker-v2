import styled from 'styled-components'
const Container = styled.div`
max-width: 500px;
margin: 30px auto;
overflow: auto;
min-height: 300px;
border: 1px solid steelblue;
padding: 30px;
border-radius: 5px;
`

const HeaderStyle = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`
const TaskStyle = styled.div`
background: #f4f4f4;
margin: 5px;
padding: 10px 20px;
cursor: pointer;
border-left: ${({border}) => border ? '5px solid green' : 'none'}

& > h3 > span {
    margin-right: 5rem;
  }
& svg {
    color: red;
    cursor: pointer;
    margin-left: 20rem
}
`
export  {Container, HeaderStyle, TaskStyle}