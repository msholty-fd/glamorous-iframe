import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/App';

const { parent } = window;
const conversationBody = parent.document.body.querySelector('#foo');

ReactDOM.render(
  <App />,
  conversationBody,
);
