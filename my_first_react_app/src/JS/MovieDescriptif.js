import React, { Component } from 'react';
let numeral = require('numeral');

/* Composant s'occupant du rendu d'un film/série en DETAIL */
class MovieDescriptif extends Component {

    render() {
        let data = this.props.data;
        let type = this.props.type;

        let posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster,
            production = data.production,
            genres = data.genre,
            totalRevenue = data.revenue,
            productionList = nestedDataToString(production),
            noData = '-',
            genresList = nestedDataToString(genres);

        // On vérifie le contenus des datas...
        if (data.vote === 'undefined' || data.vote === 0) {
            data.vote = noData
        } else {
            data.vote = data.vote + ' / 10'
        }

        if (totalRevenue === 'undefined' || totalRevenue === 0) {
            totalRevenue = noData
        } else {
            totalRevenue = numeral(data.revenue).format('($0,0)');
        }

        if(data.poster === null){
            posterIMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';
        }

        /* Le rendu d'une série est différent de celui d'un film  */
        if (type === 'serie' ){
            data.original_title = data.original_title_serie;

            return (
                <div className="MovieDetailBloc">

                    <div className="MovieDetailPoster">
                        <img className='MovieDetailPosterSrc' src={posterIMG} alt="Aucun poster"/>
                    </div>

                    <div className="MovieDetailRightBloc">
                        <h1 className="MovieDetailRightBlocTitle">{data.original_title + " (détails)"}</h1>

                        <span className="tagline">{data.tagline}</span>
                        <p>{data.overview}</p>
                        <div className="additional-details">
                            <div className="genre-list">Genres: {genresList}</div>
                            <div className="production-list">Production companies: {productionList}</div>
                            <div >
                                <div > Vote Average: <span >{data.vote}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }else{
            return (
                <div className="MovieDetailBloc">

                    <div className="MovieDetailPoster">
                        <img className='MovieDetailPosterSrc' src={posterIMG} alt="Aucun poster"/>
                    </div>

                    <div className="MovieDetailRightBloc">
                        <h1 className="MovieDetailRightBlocTitle">{data.original_title + " (détails)"}</h1>

                        <span className="tagline">{data.tagline}</span>
                        <p>{data.overview}</p>
                        <div className="additional-details">
                            <div className="genre-list">Genres: {genresList}</div>
                            <div className="production-list">Production companies: {productionList}</div>
                            <div >
                                <div > Original Release: <span >{data.release}</span></div>
                                <div > Running Time: <span >{data.runtime} mins</span> </div>
                                <div > Box Office: <span >{totalRevenue}</span></div>
                                <div > Vote Average: <span >{data.vote}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function nestedDataToString(nestedData) {
    let s = '';
    if (nestedData !== undefined)
        for (let i=0 ; i<nestedData.length ; i++){
            if (nestedData[i].name !== undefined)
                if (i > 0)
                    s += ', '+nestedData[i].name;
                else
                    s += nestedData[i].name;
        }
    return s;
}
export default MovieDescriptif;