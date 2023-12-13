import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IndexPage from '../..';
function App() {
  return (
      <BrowserRouter>
        <Route path='/'>
            <p> HELLO</p>
        </Route>
      </BrowserRouter>
  );
}

export default App;