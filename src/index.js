import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './styles/global.scss';

const rootElement = document.getElementById('react-app');

render(<App />, rootElement);