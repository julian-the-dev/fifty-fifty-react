import * as Yup from 'yup'

export const validationSchemaSignup = Yup.object({
    username: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
    email: Yup.string().email('Must be a valid email').required('Required'),
    password: Yup.string()
        .required('Required')
        .matches(
            new RegExp(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
            ),
            'Password strong mandatory'
        ),
    passwordConfirmation: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

export const validationSchemaLogin = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
})
