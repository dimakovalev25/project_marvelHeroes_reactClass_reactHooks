import './charList.scss';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";

class CharList extends Component {

    state = {
        charList: [],
        newItemsLoading: false,
        offset: 210,
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest()
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)

    }

    onCharListLoading = () => {
        this.setState({
            newItemsLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            newItemsLoading: false,
            offset: offset + 6
        }))
    }


    render() {
        const {charList, offset, newItemsLoading} = this.state;

        const charItem = charList.map(item => {
            return (
                <li className="char__item"
                    key={item.id}
                    onClick={() => this.props.onCharSelected(item.id)}
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
                    disabled={this.newItemsLoading}
                    onClick={() => this.onRequest(offset)}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;