import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import AngleSigns from './components/AngleSigns';

function App () {
  return (
    <div className="app">
      <GlobalStyle blackColor />
      <Header />
      <AngleSigns />
    </div>
  );
}

export default App;
