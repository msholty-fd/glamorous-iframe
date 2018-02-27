import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ClickMe from 'Components/ClickMe';

const { parent } = window;
const conversationBody = parent.document.body.querySelector('#foo');

ReactDOM.render(
  <ClickMe />,
  conversationBody,
);
