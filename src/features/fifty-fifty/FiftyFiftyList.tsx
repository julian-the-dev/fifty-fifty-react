import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFiftyFiftyList } from './FiftyFiftySlice'

const FiftyFiftyList = () => {
    const fiftyFiftyList = useSelector(getFiftyFiftyList)
    const renderedList = fiftyFiftyList.map((fiftyFifty) => {
        return (
            <li key={fiftyFifty.id}>
                <Link to={'/fifty-fifty/' + fiftyFifty.id}>
                    {fiftyFifty.id} {fiftyFifty.title}
                </Link>
            </li>
        )
    })
    return (
        <div>
            I am a list!!
            <div>
                <ul>{renderedList}</ul>
            </div>
        </div>
    )
}

export default FiftyFiftyList
