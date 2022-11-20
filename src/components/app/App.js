import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import {Component} from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import React from "react";

class App extends Component {
    state = {
        showRandomChar: true,
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {

        const DynamicComponent = (props) => {
            return (
                <div>
                    {/*{props.children}*/}
                    {
                        React.Children.map(props.children, item => {
                            return React.cloneElement(item, {className: 'randomchar__name'})
                        })
                    }

                </div>

            )
        }

        return (
            <div className="app">

                <DynamicComponent>
                    <h2 style={{color: 'grey'}}>by_React</h2>
                    {/*<h2>by_React</h2>*/}
                </DynamicComponent>


                <AppHeader/>
                <main>
                    {this.state.showRandomChar ? <RandomChar/> : null}

                    <button
                        onClick={this.toggleRandomChar}

                    >Char add/delete
                    </button>
                    <div className="char__content">

                        <CharList onCharSelected={this.onCharSelected}/>

                        < ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar}/>
                        < /ErrorBoundary>


                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;