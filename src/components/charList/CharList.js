import './charList.scss';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import SpinnerBig from "../spinner/SpinnerBig";

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        newItemLoading: false,
        offset: 1
    }

    marvelServise = new MarvelService();

    updateCharList = () => {
        this.onRequest()
    }

    componentDidMount() {
        this.updateCharList()
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelServise
            .getAllcharacters(offset)
            .then(this.onCharListLoaded)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 6

        }))
    }


    render() {
        const {charList, loading, newItemLoading} = this.state;
        // console.log(charList)

        const charItem = charList.map(item => {
            return (
                <li key={item.id}
                    className="char__item"
                    onClick={() => this.props.onCharSelected(item.id)}
                >
                    <img
                        src={item.thumbnail.path + "." + item.thumbnail.extension}
                        alt="abyss"
                        style={{objectFit: 'contain', height: 'auto'}}
                    />
                    <div className="char__name">{item.name}</div>
                </li>
            )
        })


        return (
            <div className="char__list">
                <ul className="char__grid">
                    {loading ? <SpinnerBig style={{alignItems: 'center'}}/> : charItem}
                </ul>
                <button className="button button__main button__long">
                    <div
                        onClick={()=> this.onRequest()}
                        // disabled={newItemLoading}
                        className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;