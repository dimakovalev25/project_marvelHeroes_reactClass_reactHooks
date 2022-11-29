import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import React from "react";
import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages'
import CharSearchInfo from "../charSearchInfo/CharSearchInfo";

const App = () => {
    return (

        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path='/comics' element={<ComicsPage />}/>
                        <Route path='/comics/:comicId'  element={<SingleComicPage />}/>
                        <Route path='/' element={<MainPage />}/>
                        <Route path='/:charName' element={<CharSearchInfo />}/>
                        <Route path='*' element={<Page404/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;