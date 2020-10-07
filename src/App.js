import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Cursor from './components/Cursor';

function App () {
  return (
    <div className="app">
      <GlobalStyle blackColor />
      <Header />
    </div>
  );
}

export default App;
