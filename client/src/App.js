import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 1. get games via API from lists in files
 * 2. dockerify application
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {randomGame: ''};
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(e) {

        fetch('/games').then(function(response) {
            return response.json();
        }).then(function (response) {
            let games = response.items,
                random = Math.random(),
                randomIndex = Math.floor(random*games.length);
            this.setState({randomGame: games[randomIndex]});
        }.bind(this));

        e.preventDefault();
    }

    render() {
        return (
            <div className="App">
                {/*<div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Randomizer here</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>*/}
                <div>
                    <form onSubmit={this._onSubmit}>
                        <button type="submit">Randomize 1</button>

                        <div>
                            {this.state.randomGame}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
