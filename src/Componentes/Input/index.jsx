import React from "react";
import {  Controller } from "react-hook-form";
import {InputContainer, IconContainer, InputText, ErrorText} from "./style"


const Input = ({leftIcon, name, control, errorMessage, ...rest}) =>{
    return(
        <>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Controller 
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) =>  <InputText value=""{...field} {...rest}/>}
            />  
            
        </InputContainer>
        
        
        </>
        
    )
}

export {Input}