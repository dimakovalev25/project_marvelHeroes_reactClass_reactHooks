import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import useMarvelService from "../../services/useMarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import {Page404} from "./index";
import avengers from "../../resources/img/Avengers.png";
import avengersLogo from "../../resources/img/Avengers_logo.png";

const SingleCharPage = () => {

    const {charName} = useParams();
    const [char, setChar] = useState(null);
    const {loading, error, getChar} = useMarvelService();

    console.log(charName)
    console.log(char)


    useEffect(() => {
        updateChar();
    }, [charName]);

    const updateChar = () => {
        getChar(charName)
            .then(onCharLoaded)

    }

    const onCharLoaded = (data) => {
        setChar(data)
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Page404/> : null;
    const content = !(loading || !char) ? <View char={char}/> : null;

    return (
        <div>
            <div>
                <div className="randomComics__static">
                    <p className="randomComics__title">New comics every week! <br/>
                        Stay tuned!</p>
                    <img src={avengers} alt="avengers" className="randomComics__decoration"/>
                    <img src={avengersLogo} alt="avengersLogo" className="randomComics__decoration__logo"/>
                </div>
            </div>

            <div className="single-comic">
                {errorMessage}
                {spinner}
                {content}
            </div>

        </div>


    )
}


const View = ({char}) => {
    const {thumbnail, title, description} = char;

    return (
        <>
            <div className="single-comic">
                <img src={thumbnail.path + '.' + thumbnail.extension} alt="x-men" className="single-comic__img"/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{description}</p>
                    <hr/>
                    <Link to={'/'} className="single-comic__back">Back to all</Link>
                </div>
            </div>
        </>
    )

}

export default SingleCharPage;
