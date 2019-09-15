import React from 'react'
import Card from './Card'


function CardList({robots}) {

    const CardArray = robots.map((robo,i) =>{
        return <Card key={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email}/>
    })
    return (
        <div>
            {CardArray}
        </div>
    )
}

export default CardList
