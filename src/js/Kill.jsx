import React from 'react';

const Kill = ({data, id, onAdd, onTake}) => {
  console.log(data);

  const handleAddCurrent = id => onAdd(id);

  const handleTakeCurrent = id => onTake(id);
    
  return (
    <div className='kill'>
      <div className='kill-flex'>
        <picture>
          <source media='(max-width: 134px)' srcSet={`${data.image}-100w.webp`} type='image/webp'/>
          <source media='(max-width: 134px)' srcSet={`${data.image}-100w.png`} />
          <source media='(min-width: 500px)' srcSet={`${data.image}-400w.webp`} type='image/webp'/>
          <source media='(min-width: 500px)' srcSet={`${data.image}-400w.png`} />
          <source media='(min-width: 400px)' srcSet={`${data.image}-300w.webp`} type='image/webp'/>
          <source media='(min-width: 400px)' srcSet={`${data.image}-300w.png`} />
          <source media='(min-width: 135px)' srcSet={`${data.image}-200w.webp`} type='image/webp'/>
          <source media='(min-width: 135px)' srcSet={`${data.image}-200w.png`} />

          <img src={`${data.img}-400w.png`}
            alt='Hitchcocks way of killing'
            className='kill-img'
              
            srcSet={`${data.image}-400w.png 400w,
            ${data.image}-300w.png 300w,
            ${data.image}-200w.png 200w,
            ${data.image}-100w.png 100w`}

            sizes='50vw'/>



        </picture>
        <div className='kill-info'>
          <h3>{data.name}</h3>
          <p>{data.text}</p>
        </div>
      </div>
      <div className='kill-nav'>
        <button className='button-prev' onClick={() => handleTakeCurrent(id)}><span className="button-text">Vorige methode</span></button>
        <button className='button-next' onClick={() => handleAddCurrent(id)}><span className="button-text">Volgende methode</span></button>
      </div>
    </div>
  );
};

export default Kill;
