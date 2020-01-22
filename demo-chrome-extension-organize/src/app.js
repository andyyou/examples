import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div>Hello, Chrome extension with React</div>
);

render(
  <App />,
  document.getElementById('app'),
);