import React from 'react';

const Fall = ({data}) => {
    
    return (
        <div className="fall">
            <h3>{data.height}</h3>
            <p>In the film {data.movie} a dying fall was made by {data.character} {data.place}.</p>
        </div>
    )
}

export default Fall;