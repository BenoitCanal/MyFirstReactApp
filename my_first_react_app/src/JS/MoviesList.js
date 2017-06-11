import React from 'react';

import MovieCard from './MovieCard';

/* Composant s'occupant de faire le rendu du composant MovieCard après récupération de la liste des films de 2016 via API */
class MoviesList extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            type:'movies',
            movies: [],
            nb_movies: 0,
            nb_pages: 0,
            page: 1,
        };
    }
    render() {

        // création du rendu pour naviguer entre les pages (en faisant attention à la page actuelle...)
        let pagesNav = null;
        if (this.state.page === 1)
            pagesNav = <div className="PagesNavigation">
                Page: {this.state.page} / {this.state.nb_pages}
                <button className="next" onClick={this.onClick.bind(this,'Next')}>Next &raquo;</button>
            </div>;
        else if (this.state.page === this.state.nb_pages)
            pagesNav = <div className="PagesNavigation">
                <button className="previous" onClick={this.onClick.bind(this,'Back')}>&laquo;Previous</button>
                Page: {this.state.page} / {this.state.nb_pages}
            </div>;
        else
            pagesNav = <div className="PagesNavigation">
                <button className="previous" onClick={this.onClick.bind(this,'Back')}>&laquo;Previous</button>
                Page: {this.state.page} / {this.state.nb_pages}
                <button className="next" onClick={this.onClick.bind(this,'Next')}>Next &raquo;</button>
            </div>;


        return (
            <div>
                <div className="MoviesList">
                    {this.state.movies.map(movie => (
                        <MovieCard data={movie} type={this.state.type} key={movie.id}/>
                    ))}
                </div>

                {pagesNav}
            </div>
        );
    }

    onClick(btn){
        let url, pageToShow;
        if (this.state.type === 'series')
            url = 'https://api.themoviedb.org/3/discover/tv?&api_key=92b418e837b833be308bbfb1fb2aca1e&year=2016';
        else
            url = 'https://api.themoviedb.org/3/discover/movie?&api_key=92b418e837b833be308bbfb1fb2aca1e&year=2016';

        if (btn === 'Next')
            pageToShow = this.state.page + 1;
        else
            pageToShow = this.state.page - 1;

        url += '&page='+pageToShow.toString();
        this.fetchApi(url,this.state.type);
    }

    fetchApi(url,type) {

        fetch(url).then((res) => res.json()).then((data) => {
            this.setState({
                type: type,
                page: data.page,
                movies: data.results,
                nb_movies: data.total_results,
                nb_pages: data.total_pages,
            })
        })

    }

    componentDidMount() {
        let url = 'https://api.themoviedb.org/3/discover/movie?&api_key=92b418e837b833be308bbfb1fb2aca1e&year=2016';

        let currUrl = window.location.href;
        let t = currUrl.split('/');
        let type = t[t.length-1];
        if (type === 'series')
            url = 'https://api.themoviedb.org/3/discover/tv?&api_key=92b418e837b833be308bbfb1fb2aca1e&year=2016';

        this.fetchApi(url,type)

    }
}

export default MoviesList;