import classNames from 'classnames'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddFiftyFifty from '../features/fifty-fifty/AddFifty'
import DisplayFiftyFifty from '../features/fifty-fifty/DisplayFiftyFifty'
import FiftyFiftyList from '../features/fifty-fifty/FiftyFiftyList'
import Home from '../features/home/Home'
import Sidebar from '../features/sidebar/Sidebar'
import './App.scss'

const App = () => {
    return (
        <Router>
            <div>
                {/*Sidebar*/}
                <div className={classNames('App-sidebar')}>
                    <Sidebar />
                </div>
                {/*Content */}
                <div className={classNames('d-inline-block', 'App-container')}>
                    <div className={classNames('container-fluid', 'App-body')}>
                        <Switch>
                            <Route path="/fifty-fifty/list">
                                <FiftyFiftyList />
                            </Route>
                            <Route path="/fifty-fifty/:id">
                                <DisplayFiftyFifty />
                            </Route>
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
