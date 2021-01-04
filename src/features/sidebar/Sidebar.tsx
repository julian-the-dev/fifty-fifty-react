import { useSelector } from 'react-redux'
import { selectUser } from '../user/userSlice'

const Sidebar = () => {
    const user = useSelector(selectUser)
    let userContent = getUserContent()

    function getUserContent() {
        if (user) {
            return <span>User found: {user.toto}</span>
        } else {
            return <span>No User found</span>
        }
    }

    return (
        <div>
            <div> I am a side bar</div>
            <div>{userContent}</div>
        </div>
    )
}

export default Sidebar
