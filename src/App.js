import React from 'react';
import './App.css';



const ThisThing = React.createClass({

  getInitialState: function() {
    return {
      count: 0,
      likes: 's'
    }
  },

  push: function(){
    this.setState({
      count: this.state.count + 1,
      likes: this.state.count === 0 ? '' : 's'
    })
  },

  render() {
    return (
      <div className="App">
        <button className="button" onClick={this.push}>{this.state.count} Like{this.state.likes}</button>
      </div>
    );
  }
})

export default ThisThing;
