import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from "../comicsList/ComicsList";

import {BrowserRouter as Router, Route} from "react-router-dom";

import decoration from '../../resources/img/vision.png';
import {useState} from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import React from "react";

const App = () => {

    const [selectedChar, setChar] = useState(null);
    const [showRandomChar, setRandomChar] = useState(true);

    const onCharSelected = (id) => {
        setChar(id);
    }

    const toggleRandomChar = () => {
        setRandomChar(!showRandomChar);
    }

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>

                    {showRandomChar ? <RandomChar/> : null}

                    {/*<div className="char__content">*/}
                    {/*    <CharList onCharSelected={onCharSelected}/>*/}
                    {/*    < ErrorBoundary>*/}
                    {/*        <CharInfo charId={selectedChar}/>*/}
                    {/*    < /ErrorBoundary>*/}
                    {/*</div>*/}

                    <ComicsList/>

                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>


        </Router>


    )
}

export default App;