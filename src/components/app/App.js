import {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
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

        <Router>
            <div className="app">
                <AppHeader/>
                <main>

                    <Switch>
                        <Route exact path='/comics'>
                            <Comics/>
                        </Route>

                        <Route exact path='/'>
                            {showRandomChar ? <RandomChar/> : null}
                            <div className="char__content">
                                <CharList onCharSelected={onCharSelected}/>
                                <CharInfo charId={selectedChar}/>
                            </div>
                            <img className="bg-decoration" src={decoration} alt="vision"/>
                        </Route>


                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;