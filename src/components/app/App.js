import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import React from "react";
import {MainPage, ComicsPage, Page404} from '../pages'

const App = () => {
    return (

        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path='/comics'>
                            <ComicsPage />
                        </Route>
                        <Route exact path='/'>
                            <MainPage />
                        </Route>

                        <Route path='*'>
                            <Page404/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;