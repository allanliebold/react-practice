import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../header';
import Footer from '../footer';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: 'React' };
  }

  saySomething() {
    return 'Something!';
  }

  render() {
    setTimeout(() => {
      this.setState({ name: 'It works!' });
    }, 1000)
    return (
      <section>
        <Header />

        <h1>{this.state.name}</h1>
        <p>These elements are wrapped in a section!</p>
        <p>This one says: {this.saySomething()}</p>

        <Footer />
      </section>
    );
  }
}

export default Layout;
