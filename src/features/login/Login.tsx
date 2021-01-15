import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { HttpUtils } from '../../common/http/http.utils'
import FormLogin from './FormLogin'

const Login = () => {
    const history = useHistory()
    const [error, setError] = useState('')
    const onSubmit = (values: any) => {
        HttpUtils.post(
            '/login',
            {
                username: values.username,
                password: values.password,
            },
            false,
            {
                'Content-Type': 'application/json',
            }
        )
            .then((result: any) => {
                HttpUtils.setAccesToken(result.data.accessToken);
                HttpUtils.setRefreshToken(result.data.refreshToken);
                history.push('/');
            })
            .catch((httpError) => {
                console.log('do i pass here ?')
                setError('login failled')
            })
    }

    const renderError = (error: any) => {
        return error ? <div>Fail</div> : null
    }

    return (
        <div>
            <FormLogin submit={(values: any) => onSubmit(values)} />
            {renderError(error)}
            <Button>
                <Link to="/fifty-fifty/signup" style={{ color: 'white' }}>
                    Sign up
                </Link>
            </Button>
        </div>
    )
}
export default Login
