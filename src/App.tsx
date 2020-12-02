import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './features/home/Home'
import Sidebar from './features/sidebar/Sidebar'

const App = () => {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    {/*Sidebar*/}
                    <div className="col-1">
                        <Sidebar />
                    </div>
                    {/*Content */}
                    <div className="col-11">
                        <Switch>
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
