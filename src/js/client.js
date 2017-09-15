import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  saySomething() {
    return 'Something!';
  }

  render() {
    return (
      <div>
        <h1>It works! Yay!</h1>
        <p>These elements are wrapped in a div!</p>
        <p>This one says: {this.saySomething()}</p>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
