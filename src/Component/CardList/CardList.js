import React from "react";
import Card from '../Card/Card';

const CardList = ({robots}) => {
    // const cardComponent = robots.map(user => {
    //     return  <Card id={user.id} name={user.name} email={user.email} />
    // }) OR

    // const cardComponent = robots.map((user, i) => {
    //     return  <Card 
    //                 id={robots[i].id} 
    //                 name={robots[i].name} 
    //                 email={robots[i].email} 
    //                 key={robots[i].id} />
    // })

    return (
        <div>
            {
             robots.map((user, i) => {
                    return (
                        <Card 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        key={robots[i].id} />
                    );

                })
            }
        </div>
    );
}

export default CardList;