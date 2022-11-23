import './Comics.scss'
import avengers from '../../resources/img/Avengers.png'
import avengersLogo from '../../resources/img/Avengers_logo.png'
import firstComicsPage from '../../resources/img/UW.png'

const Comics = () => {

    return (
        <div className="randomComics">
            <div className="randomComics__static">
                <p className="randomComics__title">New comics every week! <br/>
                    Stay tuned!</p>
                <img src={avengers} alt="avengers" className="randomComics__decoration"/>
                <img src={avengersLogo} alt="avengersLogo" className="randomComics__decoration__logo"/>
            </div>
            <ViewComics/>
        </div>
    )

}


const ViewComics = () => {

    return (
        <div className='randomComics__active'>
            <div className='randomComics__active__item'>
                <img className="randomComics__active__img" src={firstComicsPage} alt="firstComicsPage"/>
                <div className="randomComics__active__img__info">
                    <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                    <p className="randomComics__active__img__price">9.99$</p>

                </div>
            </div>

            <div className='randomComics__active__item'>
                <img className="randomComics__active__img" src={firstComicsPage} alt="firstComicsPage"/>
                <div className="randomComics__active__img__info">
                    <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p> <br/>
                    <p>9.99$</p>

                </div>
            </div>

            <div className='randomComics__active__item'>
                <img className="randomComics__active__img" src={firstComicsPage} alt="firstComicsPage"/>
                <div className="randomComics__active__img__info">
                    <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p> <br/>
                    <p>9.99$</p>

                </div>
            </div>

            <div className='randomComics__active__item'>
                <img className="randomComics__active__img" src={firstComicsPage} alt="firstComicsPage"/>
                <div className="randomComics__active__img__info">
                    <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p> <br/>
                    <p>9.99$</p>

                </div>
            </div>

            <div className='randomComics__active__item'>
                <img className="randomComics__active__img" src={firstComicsPage} alt="firstComicsPage"/>
                <div className="randomComics__active__img__info">
                    <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p> <br/>
                    <p>9.99$</p>

                </div>

            </div>
        </div>
    )
}

export default Comics;