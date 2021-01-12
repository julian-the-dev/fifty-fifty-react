import axios from 'axios'
import { useHistory } from 'react-router-dom'
import FormLogin from './FormLogin'

const Signup = () => {
    const history = useHistory()
    const onSubmit = (values: any) => {
        axios
            .post(
                'http://127.0.0.1:4000/signup',
                {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((result) => {
                history.push('/')
            })
    }

    return (
        <div>
            <FormLogin
                isSignup={true}
                submit={(values: any) => onSubmit(values)}
            />
        </div>
    )
}
export default Signup
