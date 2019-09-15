import React from 'react'
function Card(props) {
    const {name ,username, email} = props
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-6">
            <img alt="robots "src={`https://robohash.org/${username}?100x100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>

            </div>
        </div>
    )
}

export default Card
