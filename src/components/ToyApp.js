import React from 'react';
import Header from './Header';

class ToyApp extends React.Component {
  state = {
    sequence: this.props.sequence
  }
  handleViewSequence = (e) => {
    const digits = e.target.elements.option.value.trim();
    this.setState(() => ({ sequence: seq}))
  }

  getSequence() {
    
  }  

  componentDidMount() {
    const promise = getSequence();
  }

  render() {
    return(
      <div>
        <Header/>
        <form onSubmit={this.handleViewSequence}>
          <input type="number" placeholder="e.g, 10"/>
          <button type="submit">View Fibonacci Sequence</button>
        </form>
       
      </div>
    );
  }
}

ToyApp.defaultProps = {
  sequence: []
};

export default ToyApp;

