import React, {useState} from "react";
import './CharSearch.scss'
import useMarvelService from "../../services/useMarvelService";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {Link} from "react-router-dom";

const CharSearch = () => {
    const [name, setName] = useState(null);
    const [char, setChar] = useState(null)

    const {loading, error, getChar} = useMarvelService();

    const updateName = (e) => {
        setName(e.target.value)
    }

    const findChar = () => {
        getChar(name)
            .then(onCharLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const styleBtn = char ? {display: 'block'} : {display: 'none'}


    return (

        <Formik
            initialValues={{
                name: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Min 2 symbols!')

            })}

            onSubmit={values => console.log(JSON.stringify(values, null, 2))}

        >
            <Form className={'charSearch'}>
                <p className={'charSearch__title'}>Or find a character by name:</p>
                {/*<button className={'charSearch__button button button__main'}>Search</button>*/}

                <div className="charSearch___btns">

                    <div>
                        <Field
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={updateName}
                            placeholder={'Enter name'}
                            className={'charSearch__input'}/>

                        {/*{name && !char ? <ErrorMessage style={{color: '#9F0013'}} className={'charSearch__title'}>The character was not found. Check the name and try again</ErrorMessage> : <p className={'charSearch__mess'}>There is! Visit page?</p> }*/}

                        {!char ? null : <p className={'charSearch__mess'}>There is! Visit page?</p>}

                    </div>
                    <div>

                        <a href={'#'} className="button button__main find">
                            <div
                                onClick={findChar}
                                className="inner">Find
                            </div>
                        </a>


                        <Link to={`/${name}`} href={'#'} style={styleBtn} className="button button__secondary topage">
                            <div className="inner">To page</div>
                        </Link>

                    </div>

                    {/*<ErrorMessage className={'error'} name={'name'} component={'div'}/>*/}


                </div>
            </Form>

        </Formik>

    )
}

export default CharSearch;