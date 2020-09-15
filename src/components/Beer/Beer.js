import React from 'react';
import './beer.css'
import Like from '../Heart'


const Beer = (props) =>{
    return(
        <li className= 'beer-itself'>
        <h2>{props.beer.name}</h2>
        <div className="descr">{props.beer.tagline}</div>
        <div className="descr">{props.beer.first_brewed}</div>
        <div class='img-and-like'>
        <img alt='beer' src={props.beer.image_url} className="beer-image"/>
        <Like  />
        </div>
        </li>
    )
}

export default Beer