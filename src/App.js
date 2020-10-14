import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import ImportantAngles from './components/ImportantAngles';
import AngleSigns from './components/AngleSigns';
import AngleSymmetrics from './components/AngleSymmetrics';
import Footer from './components/Footer';

function App () {
  return (
    <div className="app">
      <GlobalStyle blackColor />
      <Header />
      <ImportantAngles />
      <AngleSigns />
      <AngleSymmetrics />
      <Footer />
    </div>
  );
}

export default App;
