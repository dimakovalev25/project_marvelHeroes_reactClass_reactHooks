import './CharSearch.scss'
import {Link} from "react-router-dom";
import MarvelService from "../../services/MarvelService";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';

const CharSearch = (props) => {

    const [charItem, setCharItem] = useState();
    const [char, setChar] = useState('');
    const [check, setCheck] = useState(false);

    console.log(charItem)
    console.log(char)


    const {loading, getCharacterByName} = MarvelService();

    const updateCharItem = (event, char) => {
        event.preventDefault()
        getCharacterByName(char)
            .then(onCharLoaded)
            .then(() => setCheck(false))
            .catch(updateCharItemError)
    }

    const onCharLoaded = (charItem) => {
        setCharItem(charItem);
    }

    const updateChar = (e) => {
        setChar(e.target.value)
    }

    const updateCharItemError = () => {
        console.log('error')
        setCheck(true);
    }


    const charNull = () => {
        setChar('')
    }

    const successfulSearch = charItem ? <h2>There is! Visit page?</h2> : null;

    const unsuccessfulSearch = check ? <h5>The character was not found. Check the name and try again</h5> : null;

    return (
        <div className='char__search'>
            <form
                className='char__search_form form'>
                <label className='char__search_name' htmlFor="">Or find a character by name:</label>

                <div className='char__search_item'>
                    <input
                        className='char__search_input'
                        placeholder='  Enter name'
                        id="name"
                        name="name"
                        type="text"
                        onChange={updateChar}
                        // onBlur={charNull}
                        value={char}

                    />

                    <div>
                        <button
                            onClick={(event) =>
                                updateCharItem(event, char)

                            }
                            className="button button__main"
                        >
                            <div className="inner">FIND</div>
                        </button>

                        <Link
                            to={`/${char}`}
                            className="button button__secondary button__char__search_second"
                            style={charItem ? {display: 'block'} : {display: 'none'}}
                        >
                            <div className="inner">To page!</div>
                        </Link>
                    </div>
                    {successfulSearch}
                    {unsuccessfulSearch}
                </div>
            </form>
        </div>
    )
}

export default CharSearch;