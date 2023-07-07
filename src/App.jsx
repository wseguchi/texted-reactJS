import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div id="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
