import styled from 'styled-components'
const ButtonStyle = styled.button`
display: ${({block})=> block || 'inline-block'};
background: #000;
color: #fff;
border: none;
padding: 10px 20px;
margin: 5px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
font-size: 15px;
font-family: inherit;
background-color:  ${({bg}) => bg || 'steelblue'};

&:hover{
    opacity: 0.9;
    transform: scale(0.98);
}

&:focus{
    outline: none;
}

&:active{
    transform: scale(0.98);
}
`
export  {ButtonStyle}