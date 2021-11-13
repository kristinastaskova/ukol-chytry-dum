import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import './style.css';
import smartHomeData from './smartHomeData';
import Dashboard from './components/Dashboard';

const App = () => (
  <>
    <div className="container">
      <Header title="Chytrá domácnost" />
      <Dashboard data={smartHomeData} />

    </div>

  </>
);

render(<App />, document.querySelector('#app'));
