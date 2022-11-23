import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import {useState} from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import React from "react";
import SingleComic from "../singleComic/SingleComic";
import Comics from "../comics/Comics";

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
        <div className="app">

            <main>
            <AppHeader/>
            <Comics/>
                {/*{showRandomChar ? <RandomChar/> : null}*/}
                {/*<div className="char__content">*/}
                {/*    <CharList onCharSelected={onCharSelected}/>*/}
                {/*    <CharInfo charId={selectedChar}/>*/}
                {/*</div>*/}
                {/*<SingleComic/>*/}
                {/*<img className="bg-decoration" src={decoration} alt="vision"/>*/}
            </main>

        </div>
    )
}

export default App;