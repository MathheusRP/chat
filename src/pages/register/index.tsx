import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../components/inputs'
import { CreateUserSchema } from '../../schema/user'
import { ICreateUser } from '../../types/user'
import { FormStyled } from './../../style/FormStyled'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Register = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors: { email, password, name, confirmPassword, urlPhoto },
        } } = useForm<ICreateUser>({
            resolver: yupResolver(CreateUserSchema)
        })

    const message = (message: any) => {
        console.log(message)
    }

    return (
        <FormStyled>
            <div className='container'>
                <h1>REGISTER</h1>
                <form onSubmit={handleSubmit(message)}>
                    <Input
                        id='name'
                        label='Name'
                        type='text'
                        register={register}
                        error={name?.message}
                    />
                    <Input
                        id='email'
                        label='Email'
                        type='text'
                        register={register}
                        error={email?.message}
                    />
                    <Input
                        id='password'
                        label='Password'
                        type='password'
                        register={register}
                        error={password?.message}
                    />
                    <Input
                        id='confirmPassword'
                        label='Confirm Password'
                        type='password'
                        register={register}
                        error={confirmPassword?.message}
                    />
                    <Input
                        id='urlPhoto'
                        label='Url Photo'
                        type='link'
                        register={register}
                        error={urlPhoto?.message}
                    />
                    <div className='buttons'>
                        <button className='button1'>Register</button>
                        <p>Or</p>
                        <button type='button' onClick={() => navigate('/')} className='button2'>Login</button>
                    </div>
                </form>
            </div>
        </FormStyled>
    )
}

export default Register