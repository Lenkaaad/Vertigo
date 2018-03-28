import React, { Component } from 'react';
import Fall from './Fall.jsx';

class HighestFall extends Component {
  constructor(){
    super();
    this.state = {
      falls: {
        1: {
          amount: 110,
          height: `500m`,
          character: `Mr Caypor`,
          place: `off a mountain ledge`,
          movie: `Secret Agent`,
        },
        2: {
          amount: 100,
          height: `150m`,
          character: `Valerian`,
          place: `off Mount Rushmore`,
          movie: `North by Northwest`,
        },
        3: {
          amount: 93,
          height: `93m`,
          character: `Fry`,
          place: `off the Statue of Liberty`,
          movie: `Saboteur`,
        },
        4: {
          amount: 75,
          height: `c. 75m`,
          character: `Maloney`,
          place: `off a cliff`,
        },
        5: {
          amount: 64,
          height: `64m`,
          character: `Rowley`,
          place: `off Westminster Cathedral Tower`,
          movie: `Foreign Correspondent`,
        },
        6: {
          amount: 50,
          height: `50m`,
          character: `Judy/Madeleine`,
          place: `off the tower of Mission San Juan Bautista`,
          movie: `Vertigo`,
        },
        7: {
          amount: 45,
          height: `c. 50m`,
          character: `a Police Officer`,
          place: `off an apartment building`,
          movie: `Vertigo`,
        },
        8: {
          amount: 30,
          height: `30m`,
          character: `Tracy`,
          place: `through the roof of the British Museum Reading Room`,
          movie: `Blackmail`,
        },
        9: {
          amount: 20,
          height: `20m`,
          character: `Squire Pengallon`,
          place: `off the mast of a ship`,
          movie: `Jamaica Inn`,
        },
        10: {
          amount: 15,
          height: `15m`,
          character: `Jarre`,
          place: `through an apartment window`,
          movie: `Topaz`,
        },
      },
      current: {
        id: 1,
      },
    };
  }

  handleChangeSlider = e => {
    const {value} = e.currentTarget;
    console.log(value);
    console.log(this.state.current);
    const {falls} = this.state;
    const heights = [];
    const current = {...this.state.current};

    Object.keys(falls).map(id => {
      heights[id - 1] = falls[id].amount;
    });

    console.log(heights);

    const closest = heights.reduce((prev, curr) => {
      return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
    });

    console.log(closest);

    Object.keys(falls).map(id => {
      if(falls[id].amount === closest) {
        current.id = id;
      }
    });

    this.setState({current});
  }

  render() {
    return (
      <article className='highest-fall'>
        <h2>A Dying Fall</h2>
        <div className='fall-container'>
          <div className='slider-container'>
            <picture>
              <source media='(max-width: 134px)' srcSet={`./assets/img/ledge${this.state.current.id}-98w.webp`} type='image/webp'/>
              <source media='(max-width: 134px)' srcSet={`./assets/img/ledge${this.state.current.id}-98w.png`} />
              <source media='(min-width: 334px)' srcSet={`./assets/img/ledge${this.state.current.id}-390w.webp`} type='image/webp'/>
              <source media='(min-width: 334px)' srcSet={`./assets/img/ledge${this.state.current.id}-390w.png`} />
              <source media='(min-width: 234px)' srcSet={`./assets/img/ledge${this.state.current.id}-293w.webp`} type='image/webp'/>
              <source media='(min-width: 234px)' srcSet={`./assets/img/ledge${this.state.current.id}-293w.png`} />
              <source media='(min-width: 135px)' srcSet={`./assets/img/ledge${this.state.current.id}-195w.webp`} type='image/webp'/>
              <source media='(min-width: 135px)' srcSet={`./assets/img/ledge${this.state.current.id}-195w.png`} />

              <img src={`./assets/img/ledge${this.state.current.id}-390w.png`}
                alt='Hitchcock on a cliff'
                width='390' height='560'
                className='ledge'
              
                srcSet={`./assets/img/ledge${this.state.current.id}-390w.png 390w, 
                ./assets/img/ledge${this.state.current.id}-293w.png 293w,
                ./assets/img/ledge${this.state.current.id}-195w.png 195w,
                ./assets/img/ledge${this.state.current.id}-98w.png 98w"`}
              
                sizes='30vw'/>
            </picture>
            <input className='fallSlider' type='range' min='15' max='110' onChange={this.handleChangeSlider} defaultValue='500'/>
          </div>
          <Fall data={this.state.falls[this.state.current.id]}/>
        </div>
      </article>
    );
  }
}

export default HighestFall;
