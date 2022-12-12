import './charList.scss';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import SpinnerBig from "../spinner/SpinnerBig";

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
    }

    marvelServise = new MarvelService();

    updateCharList = () => {
        this.marvelServise
            .getAllcharacters()
            .then(this.onCharListLoaded)
    }

    componentDidMount() {
        this.updateCharList()
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList: charList,
            loading: false
        })
    }


    render() {
        const {charList, loading} = this.state;

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
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;