import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        This is a footer.
        <p>{this.props.title}</p>
      </footer>
    );
  }
}

export default Footer;
