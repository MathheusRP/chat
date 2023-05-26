import { StyledButton } from './styled'
import { IButon } from '../../types/TypesComponents'

export const Button = ({ name, border, color, fontSize, fontWeight, height, hover, id, width, backgroundColor, onClick, }: IButon) => {

    return (
        <StyledButton

            id={id}
            border={border}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            height={height}
            width={width}
            hover={hover}
            backgroundColor={backgroundColor}
            onClick={() => onClick}
        >
            {name}
        </StyledButton>
    )
}