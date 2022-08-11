
import styled from 'styled-components'
const InputStyle = styled.div`
margin: 20px 0;

& > label {
    display: block;
}

& > input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}

& input[type='checkbox']{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

& input[type='checkbox'] label  {
    flex: 1;
}

& input[type='checkbox'] input {
    flex: 2;
    height: 20px;
}
`
export  {InputStyle}