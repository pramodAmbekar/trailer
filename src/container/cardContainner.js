import React from 'react';
// import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './cardContainer.css'
const CardComp = (props) => {
    const styles = {
        width: "18rem"
    }
    const movie = props.movie
    return (
        movie.backdrop_path!== null?
       ( 
       <Card key={props.movie.original_title} style={styles} className="float-left card-hover mr-md-3 mt-md-3" onClick={props.onClick}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} />
            <div className="overlay" >
                <div className="text">
                    {movie.original_title}
                </div>
            </div>
            {/* <Link to={"/pokemon/" + props.movie.} className="btn btn-primary">apply</Link> */}
        </Card>) : null


    )
}
export default CardComp