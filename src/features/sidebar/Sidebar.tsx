import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFiftyFiftyList } from '../fifty-fifty/FiftyFiftySlice'
import { selectLightUser } from '../user/userSlice'
import './Sidebar.scss'

const Sidebar = () => {
    const lightUser = useSelector(selectLightUser)
    const fiftyFiftyList = useSelector(getFiftyFiftyList)
    let loginButton = renderLoginButton()
    let userContent = getUserContent()

    function renderLoginButton() {
        if (lightUser) {
            return null
        } else {
            return (
                <Button>
                    <Link to="/fifty-fifty/login" style={{ color: 'white' }}>
                        Login
                    </Link>
                </Button>
            )
        }
    }

    function getUserContent() {
        console.log(lightUser);
        if (lightUser) {
            return <span>User found: {lightUser.username}</span>
        } else {
            return <span>No User found</span>
        }
    }

    return (
        <div className="sidebar">
            <div> I am a side bar</div>
            {loginButton}
            <div>{userContent}</div>
            <div>
                <Link to="/fifty-fifty/list">
                    Number of items: {fiftyFiftyList.length}
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
