import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFiftyFiftyList } from '../fifty-fifty/FiftyFiftySlice'
import { selectUser } from '../user/userSlice'
import './Sidebar.scss'

const Sidebar = () => {
    const user = useSelector(selectUser)
    const fiftyFiftyList = useSelector(getFiftyFiftyList)
    let userContent = getUserContent()

    function getUserContent() {
        if (user) {
            return <span>User found: {user.toto}</span>
        } else {
            return <span>No User found</span>
        }
    }

    return (
        <div className="sidebar">
            <div> I am a side bar</div>
            <Button>
                <Link to="/fifty-fifty/login" style={{ color: 'white' }}>
                    Login
                </Link>
            </Button>
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
