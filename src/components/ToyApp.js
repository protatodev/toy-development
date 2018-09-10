import React from 'react';
import Header from './Header';

class ToyApp extends React.Component {
  state = {
    sequence: this.props.sequence
  }
  handleViewSequence = (e) => {
    e.preventDefault();
    const digits = e.target.elements.sequence.value.trim();
    const promise = this.getSequence(digits);

    promise.then(seq => {
      this.setState(() => ({ sequence: seq.sequence}));
    }).catch(err => {
      console.log(err);
    });
    
  }

  getSequence(digits) {
    return new Promise((resolve,reject) => {
      const request = new XMLHttpRequest();

      request.open('GET', `http://localhost:8000/fibonacci/${digits}`, true);

      request.onload = function() {
        if(request.status === 200) {
          const sequence = JSON.parse(request.response);
          resolve(sequence);
        } else {
          reject(request.statusText);
        }
      }

      request.send();
    });
  }  

  render() {
    return(
      <div>
        <Header/>
        <form onSubmit={this.handleViewSequence}>
          <input type="number" name="sequence" placeholder="e.g, 10"/>
          <button type="submit">View Fibonacci Sequence</button>
        </form>
        {this.state.sequence.length > 0 && this.state.sequence.map((number, index) => <p key={index}>{number}</p>)}
      </div>
    );
  }
}

ToyApp.defaultProps = {
  sequence: []
};

export default ToyApp;

