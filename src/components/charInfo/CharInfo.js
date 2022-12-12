import './charInfo.scss';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";

import Spinner from "../spinner/Spinner";
import Skeleton from "../skeleton/Skeleton";




class CharInfo extends Component {

    state={
        char: null,
        loading: false,
    }

    marvelServise = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    updateChar = () => {
        const {charId} = this.props;

        if (!charId) {
            return;
        }

        this.onCharLoading();

        this.marvelServise
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch()
    }

    onCharLoaded = (char) => {
        this.setState({
            char: char,
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    render() {
        const {char, loading} = this.state;
        const skeleton = char || loading ? null : <Skeleton/>;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || !char) ? <View char={char}/> : null;

        return (
            <div className="char__info">
                {skeleton}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {

    const {name, description, thumbnail, homepage, wiki, comics} = char;
    const noComics = comics.length === 0 ? <div>Comics not found</div> : null;

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>

            {comics.map(item => {
                return (
                    <li key={item.name}
                        className="char__comics-item">
                        {item.name}
                    </li>
                )
            })}

            {noComics}
        </>
    )

}

export default CharInfo;