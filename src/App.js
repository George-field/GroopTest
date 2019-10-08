import React from 'react';
import './App.css';
import Person from './components/person'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class App extends React.Component {
  state = {
    //could move into seperate file and import
    people : [
      {
        name: "Alice", age: 20
      },
      {
        name:"Bob", age:25
      },
      {
       name: "Carol", age :30
      },
      {
        name: "Dave", age: 35
      }
    ],
    inputName : "",
    inputAge : 0 
  }

  handleNameChange = (event) => {
    this.setState({inputName: event.target.value});
  }

  handleAgeChange = (event) => {
    this.setState({inputAge: event.target.value});
  }

  handleSubmit = (event) => {
    console.log("Called")
    this.state.people.push({name: this.state.inputName, age: this.state.inputAge})
  }

  render() {

    //Calculations of Ages
    const averageAge = this.state.people.map(person => {return person.age}).reduce((a,b) => a + b, 0) / this.state.people.length 
    const oldest = this.state.people.sort((a, b) => {return b.age - a.age})[0]
    const youngest = this.state.people.sort((a, b) => {return a.age - b.age})[0]
   


    return (
      <div>
        <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Add user</Tab>
        </TabList>

          <TabPanel>
          <h1>Hello</h1>
          <h1>Average Age:{averageAge}</h1>
          <h1>Oldest Person{<Person name={oldest.name} age={oldest.age} />}</h1>
          <h1>Youngest Person{<Person name={youngest.name} age={youngest.age} />}</h1>
          <h2>List Of Memebers</h2>
          <div>
          {this.state.people.map((user, i) => {
            return <Person id={i} name={user.name} age={user.age} />
          })}
          </div>
          </TabPanel>
          <TabPanel>
          {/* Make Form Into Child Component*/}
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.inputName} onChange={this.handleNameChange} />
            </label>
            <label>
              age:
              <input type="text" value={this.state.inputAge} onChange={this.handleAgeChange} />
            </label>
            <button onClick={() => {this.handleSubmit()}}>
              Add Member
            </button>
          </form>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default App;
