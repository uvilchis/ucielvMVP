import React from 'react';
import Search from './Search.jsx';
import dictionaryApi from '../searchDictionary.js'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      value : ''
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch (event) {
   let query = JSON.stringify(this.state.value)
   searchDictionary(query, (data)=>{
     console.log(data)
   })
    event.preventDefault();
  }

  render() {
    return (
      <div>
       <h1>Hello!</h1>
       <h2>Good to see you here.</h2>
       <Search value={this.state.value} handleSearch={this.handleSearch.bind(this)} handleChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default App
