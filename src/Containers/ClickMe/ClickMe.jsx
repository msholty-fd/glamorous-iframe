import React from 'react';
import glamorous from 'glamorous';
import logo from 'assets/logo.png';

const Button = glamorous.button({
  height: 60,
  backgroundColor: 'blue',
  width: 60,
  borderRadius: '50%',
  position: 'fixed',
  right: 0,
  bottom: 0,
});

const Img = glamorous.img({
  height: 50,
});

export default () => (
  <Button onClick={() => console.warn('asdf')} onKeyDown={() => console.warn('asdf')}>
    <Img src={logo} alt="logo" />
  </Button>
);
