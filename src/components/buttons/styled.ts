import styled, { css } from "styled-components";
import { IButon } from '../../types/TypesComponents'


const hoverList = [
  ``,
  `border-color: var(--color-2); color: var(--color-2);`,
  `border-color: var(--color-2); color: var(--grey-2); background-color: var(--color-2);`,
]

export const StyledButton = styled.button<IButon>`

    height: 30px;
    width: 100px;
    border-radius: 8px;
    border: 2px solid transparent;

    ${({ border, color, width, height, fontSize, fontWeight, backgroundColor, hover = 0 }) => {

    return css`
            border: ${border};
            color: ${color};
            width: ${width};
            height: ${height};
            font-size: ${fontSize};
            font-weight: ${fontWeight};
            background-color: ${backgroundColor};
            
          &:hover {
            ${hoverList[hover]}
          }
            
        `
  }}

`

