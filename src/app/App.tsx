import classNames from 'classnames'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddFiftyFifty from '../features/fifty-fifty/AddFifty'
import Home from '../features/home/Home'
import Sidebar from '../features/sidebar/Sidebar'
import './App.scss'

const App = () => {
    return (
        <Router>
            <div className={classNames('w-100')}>
                {/*Sidebar*/}
                <div className={classNames('w-10', 'd-inline-block')}>
                    <Sidebar />
                </div>
                {/*Content */}
                <div className={classNames('w-90', 'd-inline-block')}>
                    <div className={classNames('container-fluid', 'App-body')}>
                        <Switch>
                            <Route path="/fifty-fifty">
                                <AddFiftyFifty />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App
