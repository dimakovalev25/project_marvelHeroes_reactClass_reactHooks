import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import {useState} from "react";

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
               < ErrorBoundary>

                   <CharInfo charId={selectedChar}/>

               < /ErrorBoundary>

           </div>
       </>
    )
}

export default MainPage;