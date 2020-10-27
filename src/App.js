import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InitialForm from './Components/InitialForm'
import FirstForm from './Components/FirstForm'
import SecondForm from './Components/SecondForm'
import './App.css';

function App() {
  return (
    //Routes for components
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={InitialForm} />
        <Route path='/1' exact component={FirstForm} />
        <Route path='/2' exact component={SecondForm} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
