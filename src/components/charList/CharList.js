import './charList.scss';
import {useState, useEffect, useRef} from "react";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import SpinnerBig from "../spinner/SpinnerBig";

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(210);

    const {loading, error, getAllCharacters} = MarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ?  setNewItemsLoading(false) : setNewItemsLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
        setCharList(charList => [...charList, ...newCharList]);
        setNewItemsLoading(NewItemsLoading => false);
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
    const spinner = loading && !newItemsLoading ? <SpinnerBig/> : null;

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