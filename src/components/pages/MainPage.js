import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import React, {useState} from "react";
import CharSearch from "../charSearch/CharSearch";

const MainPage = () => {
    const [selectedChar, setChar] = useState(null);
    const [showRandomChar, setRandomChar] = useState(true);

    const onCharSelected = (id) => {
        setChar(id);
    }
    const toggleRandomChar = () => {
        setRandomChar(!showRandomChar);
    }

    return (
        <>
            {showRandomChar ? <RandomChar/> : null}
            <div className="char__content">
                <CharList onCharSelected={onCharSelected}/>
                <div>
                    <CharInfo charId={selectedChar}/>
                    <CharSearch/>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;