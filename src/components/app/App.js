import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import {lazy, Suspense} from "react";
import {SingleComicPage, MainPage, ComicsPage} from "../pages";
import Spinner from "../spinner/Spinner";
import SingleCharPage from "../pages/SingleCharPage";

const Page404 = lazy(() => import ('../pages/404'))

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>

                    <Suspense fallback={<span>LOADING...</span>}>
                        <Routes>
                            <Route path='/comics' element={<ComicsPage/>}/>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='/:charName' element={<SingleCharPage/>}/>
                            <Route path='*' element={<Page404/>}/>
                            <Route path='/comics/:comicsId' element={<SingleComicPage/>}/>
                        </Routes>
                    </Suspense>

                </main>
            </div>
        </Router>
    )
}

export default App;