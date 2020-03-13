import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            Home
          </Link>
        </nav>
      </header>
      <>
        <Route exact path="/" component={Home} />
      </>
    </div>
  );
}

export default App;
