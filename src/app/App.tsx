import classNames from 'classnames'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HttpUtils } from '../common/http/http.utils'
import AddFiftyFifty from '../features/fifty-fifty/AddFiftyFifty'
import DisplayFiftyFifty from '../features/fifty-fifty/DisplayFiftyFifty'
import EditFiftyFifty from '../features/fifty-fifty/EditFiftyFifty'
import { loadFiftyFifty } from '../features/fifty-fifty/FiftyFiftySlice'
import FiftyFiftyList from '../features/fifty-fifty/ListFiftyFifty'
import Home from '../features/home/Home'
import Login from '../features/login/Login'
import Signup from '../features/login/Signup'
import Sidebar from '../features/sidebar/Sidebar'
import './App.scss'

const App = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadFiftyFifty())
    }, [useDispatch])

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
                            <Route path="/fifty-fifty/login">
                                <Login />
                            </Route>
                            <Route path="/fifty-fifty/signup">
                                <Signup />
                            </Route>
                            <Route path="/fifty-fifty/edit/:id">
                                <EditFiftyFifty />
                            </Route>
                            <Route path="/fifty-fifty/display/:id">
                                <DisplayFiftyFifty />
                            </Route>
                            <Route path="/fifty-fifty/add">
                                <AddFiftyFifty />
                            </Route>
                            <Route path="/fifty-fifty/list">
                                <FiftyFiftyList />
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
