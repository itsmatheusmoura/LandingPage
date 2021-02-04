import React from 'react';
import GlobalStyle from './styles/global';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle/>
        <Home/>
      </>
    </div>
  );
}

export default App;
