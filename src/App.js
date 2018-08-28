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

  switchNameHandler = (newName) => {
    // console.log('clickkkkkkked');
    // BELOW DON'T DO THAT
    // this.state.persons[0].name = 'Abs';
    this.setState({
      persons: [
        { name: newName, age: '25' },
        { name: 'Abby', age: '20' },
        { name: 'abigail', age: '37' },
      ]
    })
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
        {this.state.showPersons === true ?
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
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement ('h1',null,'Hello')) 
  }
}

export default App;
