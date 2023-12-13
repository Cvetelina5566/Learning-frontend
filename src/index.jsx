import React from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
// import './App.css';

//import Manatee from './components/Manatee/Manatee';

function IndexPage() {
  return (
    // <div className="wrapper">
    //   <h1>Marine Mammals</h1>
      <BrowserRouter>
          <Route path='/'>
         <p>Hello</p>
         </Route>
      </BrowserRouter>
    //</div>
  );
}

export default IndexPage;