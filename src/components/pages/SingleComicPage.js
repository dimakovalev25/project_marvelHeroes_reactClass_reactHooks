import './singleComicPage.scss';
import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";

const SingleComicPage = () => {

    const {comicId} = useParams();
    const [comic, setComic] = useState(null);
    const {loading, error, getComics} = MarvelService();
    console.log(comic)

    useEffect(() => {
        updateComic()
    }, [comicId])

    const updateComic = () => {
        getComics(comicId)
            .then(onComicLoaded)
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <>
            {spinner}
            {content}
        </>
    )
}

const View = ({comic}) => {
    const {title, description, pageCount, thumbnail, price} = comic;
    console.log(title);

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                {/*<p className="single-comic__descr">{pageCount}</p>*/}
                <div className="single-comic__price">Price: {price}</div>
            </div>
            <Link to='/comics' className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComicPage;