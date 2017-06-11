import React, { Component } from 'react';
import MovieDescriptif from './MovieDescriptif';

/* Composant s'occupant de faire le rendu du composant MovieDescriptif après récupération du film via API */
class MovieDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'movie',
            movieID: 166426
        }
    }
    render() {
        return (
            <div>
                <MovieDescriptif data={this.state} type={this.state.type}/>
            </div>
        )
    }

    fetchApi(url,type) {

        fetch(url).then((res) => res.json()).then((data) => {
            // update state with API data
            this.setState({
                type: type,
                movieID: data.id,
                original_title: data.original_title,
                original_title_serie: data.original_name,
                tagline: data.tagline,
                overview: data.overview,
                homepage: data.homepage,
                poster: data.poster_path,
                production: data.production_companies,
                production_countries: data.production_countries,
                genre: data.genres,
                release: data.release_date,
                vote: data.vote_average,
                runtime: data.runtime,
                revenue: data.revenue,
                backdrop: data.backdrop_path

            })
        })
    }

    fetchMovieID(movieID) {
        let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=92b418e837b833be308bbfb1fb2aca1e`;
        this.fetchApi(url)
    }

    componentDidMount() {
        let currUrl = window.location.href;
        let t = currUrl.split('/');
        let idMovie = t[t.length-1];
        let type = t[t.length-2];
        let url = `https://api.themoviedb.org/3/movie/${idMovie}?&api_key=92b418e837b833be308bbfb1fb2aca1e`;

        if (type === 'serie')
            url = `https://api.themoviedb.org/3/tv/${idMovie}?&api_key=92b418e837b833be308bbfb1fb2aca1e`;

        this.fetchApi(url,type)
    }
}
export default MovieDetail;