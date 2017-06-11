import React, { Component } from 'react';
import '../CSS/App.css';
import MovieDetail from "./MovieDetail";
import MoviesList from "./MoviesList";

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

/* Composant principal de l'application */
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    /* Header */
                    <div className="App-header">
                        <h1>Movies Application</h1>
                        <div className="Nav-bar">
                            <a href={'/movies'}>Films</a>
                            <a href={'/series'}>Séries</a>
                        </div>
                    </div>

                    /* Contenu */
                    <div className="App-content">
                        <Route exact path="/" component={MoviesList}/>
                        <Route exact path="/movies" component={MoviesList}/>
                        <Route exact path="/series" component={MoviesList}/>
                        <Route exact path="/movie/*" component={MovieDetail}/>
                        <Route exact path="/serie/*" component={MovieDetail}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
