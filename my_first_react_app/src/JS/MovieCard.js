import React, { Component } from 'react';

/* Composant s'occupant du rendu d'un film/série dans la liste */
class MovieCard extends Component {
    render() {
        let data = this.props.data;
        let type = this.props.type;

        if (data.original_title === undefined || data.original_title === null)
            data.original_title = data.original_name;

        let path = '/movie/';
        if (type === 'series')
            path = '/serie/';

        return (
            <div className="Movie">
                <img className="MovieImgSrc" src={'https://image.tmdb.org/t/p/w500' + data.poster_path} alt="Aucun poster trouvé"/>
                <div className="MovieRightSide">
                    <div className="MovieTitle">{data.original_title}</div>
                    <div className="MovieOverview">{data.overview}</div>
                    <div className="MoreInfo"><a href={path + data.id}>Plus d'informations ></a></div>
                </div>
            </div>
        )
    }
}

export default MovieCard;