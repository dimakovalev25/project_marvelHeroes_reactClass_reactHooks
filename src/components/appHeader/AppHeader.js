import './appHeader.scss';
import {Link, NavLink} from "react-router-dom";
import UseContext from "../../context/useContext";

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to={'/'}>
                    <span>Marvel</span> information portal
                </Link>
                <br/>

                <UseContext/>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink to={'/'}>Characters</NavLink></li>
                    /
                    <li><NavLink to={'/comics'}>Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;