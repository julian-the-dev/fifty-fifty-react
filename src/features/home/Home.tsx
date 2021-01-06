import classNames from 'classnames'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
    return (
        <div className={classNames('Home')}>
            <header>
                <p>50/50</p>
                <p>
                    You are on the homepage, please use the link below to create
                    a new 50/50
                </p>
                <Button>
                    <Link to="/fifty-fifty" style={{color: "white"}}>Create new fifty/fifty</Link>
                </Button>
            </header>
        </div>
    )
}

export default Home
