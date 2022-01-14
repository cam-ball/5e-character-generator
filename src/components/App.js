import React from 'react';
import QueryInterface from './QueryInterface'
import './../styles/App.css'

const App = () => {
  return (
    <>
    <div className='main'>
      <div className='content'>
        <QueryInterface />
      </div>
    </div>
    <footer className="footer mt-auto py-3 text-center">
      made with ♥  by <a href="https://laurenball.dev">laurenball</a>
    </footer>
    </>
  );
}

export default App;
