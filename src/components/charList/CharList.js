import './charList.scss';
import {useState, useEffect, useRef} from "react";
import MarvelService from "../../services/MarvelService";

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(210);

    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest()
    }, [])

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)

    }

    const onCharListLoading = () => {
        setNewItemsLoading(true);
    }

    const onCharListLoaded = (newCharList) => {
        setCharList(charList => [...charList, ...newCharList]);
        setNewItemsLoading(NewItemsLoading => false);
        setOffset(offset => offset + 9)

    }

    const charItem = charList.map(item => {
        return (
            <li className="char__item"
                key={item.id}
                onClick={() => props.onCharSelected(item.id)}
            >
                <img
                    src={item.thumbnail.path + '.' + item.thumbnail.extension}
                    alt={item.name}/>
                <div className="char__name">{item.name}</div>
            </li>
        )
    })

    return (
        <div className="char__list">
            <ul className="char__grid">
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