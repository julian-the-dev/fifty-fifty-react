import classNames from 'classnames'
import { useFormik } from 'formik'
import { validationSchemaLogin, validationSchemaSignup } from './Login.const'

const FormLogin = (props: any) => {
    const isSignup = !!props.isSignup
    const initialValues: any = {
        username: '',
        email: '',
        password: '',
    }
    if (isSignup) {
        initialValues.passwordConfirmation = ''
    }
    const formik = useFormik({
        initialValues,
        validationSchema: isSignup
            ? validationSchemaSignup
            : validationSchemaLogin,
        onSubmit: async (values) => {
            props.submit(values)
        },
    })

    const renderInput = (
        attr: 'username' | 'email' | 'password' | 'passwordConfirmation'
    ) => {
        const isPassword =
            attr === 'password' || attr === 'passwordConfirmation'
        return (
            <div
                className={classNames({
                    'form-group': true,
                    'has-error': formik.errors[attr],
                })}
            >
                <input
                    id="title"
                    type={isPassword ? 'password' : 'text'}
                    className={classNames({
                        'form-control': true,
                        'is-invalid': formik.errors[attr],
                    })}
                    placeholder={attr}
                    {...formik.getFieldProps(attr)}
                />
            </div>
        )
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <button type="submit" className="btn btn-primary">
                {isSignup ? 'Sign up' : 'Login'}
            </button>
            {renderInput('username')}
            {renderInput('email')}
            {renderInput('password')}
            {isSignup ? renderInput('passwordConfirmation') : null}
        </form>
    )
}
export default FormLogin
