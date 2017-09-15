import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../header';
import Footer from '../footer';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'React!',
    };
  }

  saySomething() {
    return 'Something!';
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <section>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.title} />

        <h2>{this.state.title}</h2>
        <p>These elements are wrapped in a section!</p>
        <p>This one says: {this.saySomething()}</p>

        <Footer title={'Is it working?'} />
      </section>
    );
  }
}

export default Layout;
