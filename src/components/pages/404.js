import ErrorMarvel from "../errorMessage/ErrorMarvel";
import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <>
            <ErrorMarvel/>

            <div className={'app__title'} style={{display: 'block', width: '450px', height: '450px', objectFit: 'contain', margin: '0 auto'}}>

                <Link to={'/'}>
                    <li>Page not Found! =>  Back to main Page!</li>
                </Link>

            </div>

        </>
    )
}

export default Page404;