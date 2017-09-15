import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  handleChange(e) {
    e.preventDefault;
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    console.log(this.props);
    return (
      <header>
        {this.props.title}
        <div>
          <input
            value={this.props.title}
            onChange={this.handleChange.bind(this)}
            placeholder="Type something!" />
        </div>
      </header>
    );
  }
}

export default Header;
