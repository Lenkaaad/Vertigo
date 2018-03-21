import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent.jsx';

ReactDOM.render(
  <TestComponent />,
  document.getElementById('react-component-1')
);

ReactDOM.render(
  <TestComponent />,
  document.getElementById('react-component-2')
);
