import React from 'react';
import "./Card.css";

const Card = ({ name, email, id }) => {
    // destructure
    // const { name, email, id } = props;
    // if (true) {
    //     throw new Error('Nooooooo!');
    // }
    return (
        <div style={{cursor: 'pointer'}} className="tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
            <div>
                <h2 style={{color: 'red'}} className="f5">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;