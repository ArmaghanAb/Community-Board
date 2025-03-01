import React from 'react';
import "../styles/Card.css";

const Card=({title, category, image, link})=>{    //expects title and category as props.
    return(
        <div className='card'>
            <h3>{title}</h3>
            <p>{category}</p>
            <img src={image} alt={title}/>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button>View More</button>
            </a>
        </div>
    );


}
export default Card;