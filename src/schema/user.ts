import * as yup from 'yup'
import { IUserLogin, ICreateUser } from './../types/user'

export const UserLoginSchema: yup.ObjectSchema<IUserLogin> = yup.object().shape({
    email: yup.string().email("Deve ser um email valido").required("Insira seu Email"),
    password: yup.string().required("Insira sua senha")
})

export const CreateUserSchema: yup.ObjectSchema<ICreateUser> = yup.object().shape({
    name: yup.string().required("Insira seu nome").min(3).max(30),
    email: yup.string().required("Insira seu email").max(50),
    password: yup.string().required("Insira sua senha")
        .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula ")
        .matches(/(\d)/, "Deve conter ao menos 1 número")
        .matches(/.{8,}/, "Deve conter no minimo 8 caracteres"),
    confirmPassword: yup.string().required("Confirmar senha obrigatório")
        .oneOf([yup.ref("password")], "Senha não confere"),
    urlPhoto: yup.string().url("Deve ser uma url valida").optional()
})
