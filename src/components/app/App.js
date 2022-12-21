import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import {SingleComicPage, MainPage, Page404, ComicsPage} from "../pages";


const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path='/comics' element={<ComicsPage/>}/>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='*' element={<Page404/>}/>
                        <Route path='/comics/:comicsId' element={<SingleComicPage/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;