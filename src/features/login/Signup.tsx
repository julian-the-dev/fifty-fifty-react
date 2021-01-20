import axios from 'axios'
import { useHistory } from 'react-router-dom'
import FormLogin from './FormLogin'
import { HttpUtils } from '../../common/http/http.utils'

const Signup = () => {
    const history = useHistory()
    const onSubmit = (values: any) => {
        HttpUtils
            .post(
                '/signup',
                {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                },
                true,
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
