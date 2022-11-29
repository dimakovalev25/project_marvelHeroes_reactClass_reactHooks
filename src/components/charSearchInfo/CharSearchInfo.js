import './CharSearchInfo.scss'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";

const CharSearchInfo = () => {

    const {charName} = useParams();

    const [char, setChar] = useState();
    const {loading, getCharacterByName} = MarvelService();

    console.log(charName)

    useEffect(() => {
        updateChar()
    }, [charName])

    const updateChar = () => {
        getCharacterByName(charName)
            .then(onCharLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || !char) ? <View char={char}/> : null;

    return (
        <>
            {spinner}
            {content}
        </>

    )
}


const View = ({char}) => {
    const {name, thumbnail, description} = char;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={name} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <Link to='/comics' className="single-comic__back">Back to all</Link>
        </div>
    )
}


export default CharSearchInfo;
