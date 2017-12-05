import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie } from '../actions'

class ShowMovie extends Component {
    componentDidMount() {
        const id = this.props.match.params;
        console.log('id1', id)
        this.props.fetchMovie(id.id);
    }

    renderPicture(title) {
        const allpictures = {
            "Castle in the Sky": "https://upload.wikimedia.org/wikipedia/en/4/40/Castle_in_the_Sky_%28Movie_Poster%29.jpg",
            "Grave of the Fireflies": "https://upload.wikimedia.org/wikipedia/en/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
            "My Neighbor Totoro": "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
            "Kiki's Delivery Service": "https://upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg",
            "Only Yesterday": "https://upload.wikimedia.org/wikipedia/en/4/46/OYpost.jpg",
            "Porco Rosso": "https://upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg",
            "Pom Poko": "https://upload.wikimedia.org/wikipedia/en/6/68/Pompokoposter.jpg",
            "Whisper of the Heart": "https://upload.wikimedia.org/wikipedia/en/9/93/Whisper_of_the_Heart_%28Movie_Poster%29.jpg",
            "Princess Mononoke": "https://upload.wikimedia.org/wikipedia/en/2/24/Princess_Mononoke_Japanese_Poster_%28Movie%29.jpg",
            "My Neighbors the Yamadas": "https://upload.wikimedia.org/wikipedia/en/2/26/Yamadas.jpg",
            "Spirited Away": "https://upload.wikimedia.org/wikipedia/en/3/30/Spirited_Away_poster.JPG",
            "The Cat Returns": "https://upload.wikimedia.org/wikipedia/en/8/8e/Cat_Returns.jpg",
            "Howl's Moving Castle": "https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg",
            "Tales from Earthsea": "https://upload.wikimedia.org/wikipedia/en/e/e5/Gedo6sn.jpg",
            "Ponyo": "https://upload.wikimedia.org/wikipedia/en/c/c8/Ponyo%27s_Japanese_poster.jpg",
            "Arrietty": "https://upload.wikimedia.org/wikipedia/en/e/e7/Karigurashi_no_Arrietty_poster.png",
            "From Up on Poppy Hill": "https://upload.wikimedia.org/wikipedia/en/0/07/Kokurikozaka_kara_film_poster.jpg",
            "The Wind Rises": "https://upload.wikimedia.org/wikipedia/en/a/a3/Kaze_Tachinu_poster.jpg",
            "The Tale of the Princess Kaguya": "https://upload.wikimedia.org/wikipedia/en/6/68/The_Tale_of_the_Princess_Kaguya_%28poster%29.jpg",
            "When Marnie Was There":"https://upload.wikimedia.org/wikipedia/en/0/04/Omiode_no_Marnie_poster.jpg"
        }
        return allpictures[title]
    }

    render() {
        const { list } = this.props;


        if(!list) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/" className="btn btn-secondary">Back To Movie List</Link>
                <h3>{list.title}</h3>
                <img id="picture" src={this.renderPicture(list.title)}/>
                <div id="movie">
                    <h5>Director</h5> {list.director}
                    <h5>Producer</h5> {list.producer}
                    <h5>Year Released</h5> {list.release_date}
                    <h5>Rating</h5> {list.rt_score}
                    <h5>Description</h5> {list.description}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ list }, ownProps) { //ownProps is the same as this.props
    
    return { list: list[ownProps.match.params.id] } //only returns ONE movie
}

export default connect(mapStateToProps, { fetchMovie: fetchMovie })(ShowMovie)