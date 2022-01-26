import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthenticationForm from './Components/AuthenticationForm';

function App() {
  return (
      <BrowserRouter>
        <Routes> 
          <Route path="/" exact element={<AuthenticationForm/>}/>
        </Routes> 
      </BrowserRouter>
  )
}

export default App;
