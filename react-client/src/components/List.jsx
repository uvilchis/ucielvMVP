import React from 'react';
import Search from './Search.jsx';
import Definitions from './Definitions.jsx'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      value : '',
      definitions : `Definitions go here`
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch (event) {
    event.preventDefault();
    axios('/oxford', {
      params : {
        formValue : this.state.value
      }
    }).then((translatedData)=>{
       this.setState({definitions : translatedData.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]})
       console.log(this.state.definitions)
    })

  }
  // translatedData.data.results[0].lexicalEntries
  render() {
    return (
      <div>
       <h1>Ahoy!</h1>
       <h2>What are you trying to define?</h2>
       <Search value={this.state.value} handleSearch={this.handleSearch.bind(this)} handleChange={this.handleChange.bind(this)}/>
       <Definitions toDisplay={this.state.definitions}/>
      </div>
    )
  }
}

export default App
