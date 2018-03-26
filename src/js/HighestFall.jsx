import React, { Component } from 'react';
import Fall from './Fall.jsx';

class HighestFall extends Component {
  constructor(){
    super();
    this.state = {
      'falls': {
        1: {
          amount: 500,
          height: "500m",
          character: "Mr Caypor",
          place: "off a mountain ledge",
          movie: "Secret Agent"
        },
        2: {
          amount: 150,
          height: "150m",
          character: "Valerian",
          place: "off Mount Rushmore",
          movie: "North by Northwest"
        },
        3: {
          amount: 93,
          height: "93m",
          character: "Fry",
          place: "off the Statue of Liberty",
          movie: "Saboteur"
        },
        4: {
          amount: 75,
          height: "c. 75m",
          character: "Maloney",
          place: "off a cliff in a car",
          movie: "Family Plot"
        },
        5: {
          amount: 64,
          height: "64m",
          character: "Rowley",
          place: "off Westminster Cathedral Tower",
          movie: "Foreign Correspondent"
        },
        6: {
          amount: 50,
          height: "50m",
          character: "Judy/Madeleine",
          place: "off the tower of Mission San Juan Bautista",
          movie: "Vertigo"
        },
        7: {
          amount: 45,
          height: "c. 50m",
          character: "a Police Officer",
          place: "off an apartment building",
          movie: "Vertigo"
        },
        8: {
          amount: 30,
          height: "30m",
          character: "Tracy",
          place: "through the roof of the British Museum Reading Room",
          movie: "Blackmail"
        },
        9: {
          amount: 20,
          height: "20m",
          character: "Squire Pengallon",
          place: "off the mast of a ship",
          movie: "Jamaica Inn"
        },
        10: {
          amount: 15,
          height: "15m",
          character: "Jarre",
          place: "through an apartment window",
          movie: "Topaz"
        }
      },
      'current': {
        id: 1
      }
    };
  }

  setCurrentItem(value) {
    const {falls} = this.state;
    let heights = [];
    let current = {...this.state.current};

    for(i = 0; i<falls.count; i++){
      heights[i] = falls[(i+1)].amount;
    }

    const closest = heights.reduce((prev, curr) => {
      return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
    });

    for(i = 0; i<falls.count; i++){
      if (array[i+1][key] === closest) {
        current.id = i+1;
      }
    }

    this.setState({current});
  }

  handleChangeSlider(e) {
    const {value} = e.currentTarget;
    console.log(value);
    console.log(this.state.current);
    const {falls} = this.state;
    let heights = [];
    let current = {...this.state.current};

    Object.keys(falls).map(id => {
      heights[id-1] = falls[id].amount;
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
      <article className="highest-fall">
        <h2>A Dying Fall</h2>
        <div className="fall-container">
          <div className="slider-container">
            <picture>
              <source media="(max-width: 139px)" srcSet="./assets/img/ledge-102w.webp" type="image/webp"/>
              <source media="(max-width: 139px)" srcSet="./assets/img/ledge-102w.png" />
              <source media="(min-width: 350px)" srcSet="./assets/img/ledge-409w.webp" type="image/webp"/>
              <source media="(min-width: 350px)" srcSet="./assets/img/ledge-409w.png" />
              <source media="(min-width: 246px)" srcSet="./assets/img/ledge-307w.webp" type="image/webp"/>
              <source media="(min-width: 246px)" srcSet="./assets/img/ledge-307w.png" />
              <source media="(min-width: 140px)" srcSet="./assets/img/ledge-205w.webp" type="image/webp"/>
              <source media="(min-width: 140px)" srcSet="./assets/img/ledge-205w.png" />

              <img src="./assets/img/ledge-409w.png"
              alt="Hitchcock on a cliff"
              width="409" height="509"
              className="ledge"
              
              srcSet="./assets/img/ledge-409w.png 409w,
              ./assets/img/ledge-307w.png 307w,
              ./assets/img/ledge-205w.png 205w,
              ./assets/img/ledge-102w.png 102w"
              
              sizes="30vw"/>
            </picture>
            <input className="fallSlider" type="range" min="15" max="500" onChange={this.handleChangeSlider.bind(this)} defaultValue="500"/>
          </div>
          <Fall data={this.state.falls[this.state.current.id]}/>
        </div>
      </article>
    )
  }
}

export default HighestFall;
