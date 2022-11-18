import styled from "styled-components";

export const InputContainer = styled.div`
    width:100;
    max-width:275px;
    height: 30px;
    border-radius: 1px solid #3b3458;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFF;
    width: 100%;
    border: 0;
    height: 30px;
    padding-left: 10px;
`

export const ErrorText =styled.p` 
    margin: 5px 0;
    color:#FF0000;
    font-size:12px;
`