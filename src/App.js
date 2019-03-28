import React, { Component } from 'react';
import Loader from './components/Loader';
import List from './components/List';
import Error from './components/Error';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      shops: null,
      isLoading: true,
    };
  }
  async componentDidMount() {
    try {
      const result = await fetch('https://www.leshabitues.fr/testapi/shops', {
        headers: {
          Accept: 'application/json',
        }
      });
      const data = await result.json();
      this.setState({
        shops: data.results,
        isLoading: false,
        isError: false
      })
    }
    catch(err) {
      this.setState({
        isError: true
      });
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.isLoading ? (<Loader />) : (<List />)
        }
        {
          this.state.isError && (<Error />)
        }
      </div>
    );
  }
}

export default App;
