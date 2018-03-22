import React from 'react';
import ReactDOM from 'react-dom';
import HighestFall from './HighestFall.jsx';
import KillCharacter from './KillCharacter.jsx';

ReactDOM.render(
  <KillCharacter />,
  document.getElementById('react-component-1')
);

ReactDOM.render(
  <HighestFall />,
  document.getElementById('react-component-2')
);
