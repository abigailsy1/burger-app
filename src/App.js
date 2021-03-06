import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: 'Abs', age: '25' },
      { id: 'a2', name: 'Abby', age: '26' },
      { id: 'a3', name: 'abigail', age: '27' },
    ],
    otherState: 'some other stuff test',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let buttonClass='';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              // key={index} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
        buttonClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push('classes.red'); //classes=['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('classes.bold'); //classes = ['red', 'bold']
    }


    // JSX:
    return (
      <div className={classes.App}>
        <h1>Hello</h1>
        <p className={assignedClasses.join(' ')}>click toggle</p>
        <button
          className={buttonClass}
          onClick={this.togglePersonsHandler}>
          Toggle Names:
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
