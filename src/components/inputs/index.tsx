import { StyledInput } from './styled'
import { IInput } from '../../types/TypesComponents'
import { FiAlertCircle } from 'react-icons/fi'

export const Input = ({ label = 'none', id, type = 'text', register, error }: IInput) => {

    return (
        <StyledInput error={'error'}>
            <input required id={id} type={type} {...register(id)} />
            {error ?
                (
                    <div className='alert'>
                        <FiAlertCircle className='teste' />
                        <p>{error}</p>
                    </div>
                ) :
                (<></>)
            }
            <label htmlFor={id}>{label}</label>
        </StyledInput>
    )
}