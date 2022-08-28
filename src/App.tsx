import React from 'react';
import SearchOptions from './components/SearchOptions';
import TicketsList from './components/TicketsList';
import aboba from './data/flights.json'

import './App.css';

function App() {

  return (
    <div className="App" style={{display:'grid', gridTemplateColumns: '1fr 6fr'}}>
      <SearchOptions />
      <TicketsList />
    </div>
  );
}

export default App;
