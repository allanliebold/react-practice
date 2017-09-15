import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../header';
import Footer from '../footer';

class Layout extends React.Component {
  saySomething() {
    return 'Something!';
  }

  render() {
    return (
      <section>
        <Header />

        <h1>It works! Yay!</h1>
        <p>These elements are wrapped in a section!</p>
        <p>This one says: {this.saySomething()}</p>

        <Footer />
      </section>
    );
  }
}

export default Layout;
