import React from 'react';
import MainAppSocial from './App';
import ReactDOM from 'react-dom'

test('Component rendering without error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainAppSocial />, div);
  ReactDOM.unmountComponentAtNode(div);
});
