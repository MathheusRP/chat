import { FormStyled } from '../../style/FormStyled'
import { Input } from '../../components/inputs'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IUserLogin } from './../../types/user'
import { UserLoginSchema } from './../../schema/user'

const Home = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors: { email, password },
        } } = useForm<IUserLogin>({
            resolver: yupResolver(UserLoginSchema)
        })

    const message = (message: any) => {
        console.log(message)
    }

    return (
        <FormStyled>

            <div className='container'>
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit(message)}>
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
                    <span>Esqueci minha senha</span>
                    <div className='buttons'>
                        <button className='button1'>Login</button>
                        <p>Or</p>
                        <button type='button' onClick={() => navigate('/register')} className='button2'>Register</button>
                    </div>
                </form>
            </div>

        </FormStyled>
    )
}

export default Home