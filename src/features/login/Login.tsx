import axios from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import FormLogin from './FormLogin'

const Login = () => {
    const history = useHistory()
    const onSubmit = (values: any) => {
        axios
            .post(
                'http://127.0.0.1:4000/login',
                {
                    username: values.username,
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
            <FormLogin submit={(values: any) => onSubmit(values)} />
            <Button>
                <Link to="/fifty-fifty/signup" style={{ color: 'white' }}>
                    Sign up
                </Link>
            </Button>
        </div>
    )
}
export default Login
