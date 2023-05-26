import styled, { css } from "styled-components";

export const StyledInput = styled.div<{ error: string | undefined }>`
    position: relative;
    display: flex;
    flex-direction: column;
    
    input {
        
        height: 50px;
        background-color: transparent;
        border-radius: 8px;
        border: 2px solid var(--grey-1);
        padding: 0px 15px;
        font-size: 20px;
        outline: none;
    }

    label {
        position: absolute;
        font-size: 20px;
        padding: 0px 10px;
        top: 13px;
        left: 5px;
        border: none;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        background-color: var(--grey-2);
        transition: 0.5s;
        
    }
    
    input:valid ~ label {
        top: -10px;
        left: 15px;
        border-color: var(--grey-1);;
        transition: 0.5s;
        font-size: 16px;
    }

    input:hover ~ label, input:focus ~ label {
        top: -10px;
        left: 15px;
        border-color: var(--color-2);;
        transition: 0.5s;
        font-size: 16px;
        color: var(--color-2);
    }

    input:hover, input:focus {
        border-color: var(--color-2);
    }

    .alert {
        position: absolute;
        color: rgb(180, 70, 70);
        right: 5px;
        top: 10px;
        font-size: 20px;
        padding: 5px;

        p {
            background-color: rgb(180, 70, 70);
            padding: 5px 10px;
            position: absolute;
            top: -30px;
            right: 5px;
            color: var(--grey-2);
            border-radius: 8px;
            transition: 1s;
            display: none;
            font-size: 16px;
            display: none;
            width: 200px;
            max-width: max-content;
            flex-wrap: nowrap;
            z-index: 3;
            
        }

        &:hover ~ .teste.p{
            display: block;
        }

        .teste:hover ~ p{
           display: block;
           
        }

    }

`