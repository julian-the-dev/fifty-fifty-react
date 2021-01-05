import { useSelector } from 'react-redux'
import { getFiftyFiftyList } from '../fifty-fifty/FiftyFiftySlice'
import { selectUser } from '../user/userSlice'
import './Sidebar.scss'

const Sidebar = () => {
    const user = useSelector(selectUser)
    const fiftyFiftyList = useSelector(getFiftyFiftyList);
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
            <div>{userContent}</div>
            <div>Number of items: {fiftyFiftyList.length}</div>
        </div>
    )
}

export default Sidebar
