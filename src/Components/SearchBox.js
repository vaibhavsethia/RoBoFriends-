import React from 'react'

function SearchBox({SearchField , searchChange }) {
    return (
        <div className = "pa2">
            <label> </label>
            <input className="pa3 ba b--green bg-lightest-blue tc" type="search " placeholder="Search Robots" onChange ={searchChange}></input>
        </div>
    )
}

export default SearchBox
