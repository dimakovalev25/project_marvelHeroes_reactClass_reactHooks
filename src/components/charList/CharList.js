import './charList.scss';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";

class CharList extends Component {

    state = {
        charList: []
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateCharList()
    }

    onCharListLoaded = (charList) => {
        this.setState( {
                charList: charList
        })
        // console.log(charList.map(item => item.thumbnail))
    }

    updateCharList = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoaded)
    }

    render() {
        const {charList} = this.state;

        const charItem = charList.map(item => {
            return (
                <li className="char__item"
                    key={item.id}>
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
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;