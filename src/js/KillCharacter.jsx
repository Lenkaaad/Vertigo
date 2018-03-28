import React, { Component } from 'react';
import Kill from './Kill.jsx'

class KillCharacter extends Component {
  constructor(){
    super();
    this.state = {
      'kills': {
      1: {
        name: "The Gun",
        amount: 33,
        text: `Wist je dat uit alle Hitchcock films, 33 personen werden doodgeschoten?`,
        image: './assets/img/kill-1'
      },
      2: {
        name: "The Fall",
        amount: 10,
        text: `Wist je dat uit alle Hitchcock films, 10 personen door hoogte stierven?`,
        image: './assets/img/kill-2'
      },
      3: {
        name: "The Strangled",
        amount: 9,
        text: `Wist je dat uit alle Hitchcock films, 9 personen werden gewurgd?`,
        image: './assets/img/kill-3'
      },
      4: {
        name: "The Stabbed",
        amount: 8,
        text: `Wist je dat uit alle Hitchcock films, 8 personen werden doorgestoken?`,
        image: './assets/img/kill-4'
      },
      5: {
        name: "The Suicide",
        amount: 8,
        text: `Wist je dat uit alle Hitchcock films, 8 personen zelfmoord pleegden?`,
        image: './assets/img/kill-5'
      },
      6: {
        name: "The Drowned",
        amount: 5,
        text: `Wist je dat uit alle Hitchcock films, 5 personen zijn verdronken?`,
        image: './assets/img/kill-6'
      },
      7: {
        name: "The Birds",
        amount: 2,
        text: `Wist je dat uit alle Hitchcock films, 2 personen stierven door aanvallende vogels?`,
        image: './assets/img/kill-7'
      }
    },
    'current': {
      id: 1
    }
  }

}

  handleAdd = id => {
    console.log("add");
    let current = {...this.state.current};

    if(this.state.current.id == 7){
      current.id = 1;
    }else{
      current.id++;
    }
    this.setState({current})
  }

  handleTake(id){
    let current = {...this.state.current};

    if(this.state.current.id == 1){
      current.id = 7;
    }else{
      current.id--;
    }
    this.setState({current})
  }

  render() {
    return (
      <div className="kill-character">
        <h2 className="small-title">How to kill a character</h2>
        <Kill data={this.state.kills[this.state.current.id]} id={this.state.current.id} onTake={this.handleTake.bind(this)} onAdd={this.handleAdd.bind(this)} />
      </div>
    
    )
  }

}

export default KillCharacter
