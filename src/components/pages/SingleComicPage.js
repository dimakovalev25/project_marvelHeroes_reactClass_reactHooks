import './singleComicPage.scss';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import UseMarvelService from "../../services/useMarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";


const SingleComicPage = () => {

    const {comicsId} = useParams();
    const [comics, setComics] = useState(null);
    const {loading, error, getComics} = UseMarvelService();

    useEffect(() => {
        updateComics();
    }, [comicsId])

    const updateComics = () => {
        getComics(comicsId)
            .then(onComicsLoaded)
    }

    const onComicsLoaded = (comics) => {
        setComics(comics);
    }


    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || !comics) ? <View comics={comics}/> : null;

    return (

        <div className="single-comic">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({comics}) => {
    const {thumbnail, title, description} = comics;

    return (
        <>
            <div className="single-comic">
                <img src={thumbnail} alt="x-men" className="single-comic__img"/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{description}</p>
                    <p className="single-comic__descr">Language: en-us</p>
                    <div className="single-comic__price">9.99$</div>
<hr/>
                <a href="#" className="single-comic__back">Back to all</a>
                </div>
            </div>
        </>
    )
}


export default SingleComicPage;