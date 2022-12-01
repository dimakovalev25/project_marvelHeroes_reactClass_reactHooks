import './charList.scss';
import {useState, useEffect, useRef, useMemo} from "react";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import SpinnerBig from "../spinner/SpinnerBig";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const setContent = (process, Component, newItemsLoading) => {
    switch (process) {
        case 'waiting':
            return <SpinnerBig/>;

        case 'loading':
            return newItemsLoading ?  <Component/> : <SpinnerBig/>;
            // return <Component/>;

        case 'confirmed':
            return <Component/>;

        case 'error':
            return <ErrorMessage/>;

        default:
            throw new Error('Unexpected process state');
    }
}

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(210);

    const {loading, error, getAllCharacters, process, setProcess} = MarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCharListLoaded = async (newCharList) => {
        setCharList(charList => [...charList, ...newCharList]);
        setNewItemsLoading(NewItemsLoading => false);
        // setNewItemsLoading(false);
        setOffset(offset => offset + 9);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }


    // const charItem = charList.map((item, i) => {
    //
    //     let imgStyle = {'objectFit' : 'cover'};
    //     if (item.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
    //         imgStyle = {'objectFit' : 'contain', 'height' : 'auto'};
    //     }
    //
    //     return (
    //         <li className="char__item"
    //             key={item.id}
    //             tabIndex={0}
    //             ref={el => itemRefs.current[i] = el}
    //             onClick={() => {
    //                 props.onCharSelected(item.id);
    //                 focusOnItem(i);
    //             }}
    //         >
    //             <img
    //                 src={item.thumbnail.path + '.' + item.thumbnail.extension}
    //                 alt={item.name}
    //                 style={imgStyle}
    //             />
    //             <div className="char__name">{item.name}</div>
    //         </li>
    //     )
    // })

    function renderItems(arr) {

        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
                imgStyle = {'objectFit': 'unset'};
            }

            return (
                <CSSTransition key={item.id} timeout={500} classNames="char__item">
                    <li
                        className="char__item"
                        tabIndex={0}
                        ref={el => itemRefs.current[i] = el}
                        onClick={() => {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }}
                    >
                        <img src={item.thumbnail.path + '.' + item.thumbnail.extension} alt={item.name}
                             style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                    </li>
                </CSSTransition>
            )
        });

        return (
            <ul className="char__grid">
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(charList), newItemsLoading);
        // eslint-disable-next-line
    }, [process])

    // const items = renderItems(charList);
    // const errorMess = error ? <ErrorMessage/> : null;
    // const spinner = loading && !newItemsLoading ? <SpinnerBig/> : null;

    return (
        <div className="char__list">
            <ul className="char__grid">
                {/*{errorMess}*/}
                {/*{spinner}*/}
                {/*{items}*/}
                {elements}
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