import './charList.scss';
import {useState, useEffect, useRef} from "react";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import SpinnerBig from "../spinner/SpinnerBig";

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)

    }

    const onError = () => {
        setError(true);
        setLoading(loading => false);
    }

    const onCharListLoading = () => {
        setNewItemsLoading(true);
    }

    const onCharListLoaded = (newCharList) => {
        setCharList(charList => [...charList, ...newCharList]);
        setNewItemsLoading(NewItemsLoading => false);
        setLoading(loading => false);
        setOffset(offset => offset + 9);

    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }


    const charItem = charList.map((item, i) => {
        return (
            <li className="char__item"
                key={item.id}
                tabIndex={0}
                ref={el => itemRefs.current[i] = el}
                onClick={() => {
                    props.onCharSelected(item.id);
                    focusOnItem(i);
                }}
            >
                <img
                    src={item.thumbnail.path + '.' + item.thumbnail.extension}
                    alt={item.name}/>
                <div className="char__name">{item.name}</div>
            </li>
        )
    })



    const errorMess = error ? <ErrorMessage  /> : null;
    const spinner = loading ? <SpinnerBig/> : null;
    const content = !(loading || error) ? {charItem} : null;

    return (
        <div className="char__list">
            <ul className="char__grid">
                {errorMess}
                {spinner}
                {charItem}
            </ul>
            <button
                className="button button__main button__long"
                disabled={newItemsLoading}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList;