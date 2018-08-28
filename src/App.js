import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Abs', age: '25' },
      { name: 'Abby', age: '26' },
      { name: 'abigail', age: '27' },
    ],
    otherState: 'some other stuff test',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: '5' },
        { name: event.target.value, age: '2' },
        { name: 'Bill', age: '7' },
      ]
    })
  }
 
  deletePersonHandler = (personIndex) => {
   const persons = this.state.persons;
   persons.splice(personIndex, 1);
   this.setState({persons: persons});
 }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
          })}
      </div>
      );
    }

    // JSX:
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>test</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Switch Names:
        </button>
        {persons}
        {/* {this.state.showPersons === true ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />

              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'YO ABBY!')}
                changed={this.nameChangedHandler}
              >
                hobbies: traveling
              </Person>

              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
            </div> : null
        } */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement ('h1',null,'Hello')) 
  }
}

export default App;
