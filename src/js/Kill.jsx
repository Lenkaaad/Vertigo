import React from 'react';

const Kill = ({data, id, onAdd, onTake}) => {
    console.log(data);

    const handleAddCurrent = (id) => {
        onAdd(id);
    }

    const handleTakeCurrent = (id) => {
        onTake(id);
    }
    
    return (
        <div className="kill">
            <div class="kill-flex">
            <img src={data.image} alt=""/>
            <div className="kill-info">
            <h3>{data.name}</h3>
            <p>{data.text}</p>
            </div>
            </div>
            <div className="kill-nav">
                <button onClick={() => handleTakeCurrent(id)}>Vorige methode</button>
                <button onClick={() => handleAddCurrent(id)}>Volgende methode</button>
            </div>
        </div>
    )
}

export default Kill
