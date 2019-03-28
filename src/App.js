import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      shops: null
     }
  }
  async componentDidMount() {
    try {
      const result = await fetch('https://www.leshabitues.fr/testapi/shops', {
        headers: {
          Accept: 'application/json',
        }
      })
      const data = await result.json();
      console.log(data)
      this.setState({
        shops: data.results
      })
    }
    catch(err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
