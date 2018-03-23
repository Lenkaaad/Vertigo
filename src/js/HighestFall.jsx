import React from 'react';

const HighestFall = () => {
  const handleChangeSlider = e => {
    const {value} = e.currentTarget;
    console.log(value);
  }
  return (
    <article>
      <h2>A Dying Fall</h2>
      <input className="fallSlider" type="range"/>
    </article>
  )
}

export default HighestFall;
