import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  var person={
    Name: "Dr. Billal",
    job: "Islamic Scholar"
  }
  var person2={
    Name: "Ayesha",
    job: "teacher"
  }
  var design = {
    color: 'red',
    backgroundColor:"yellow"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        
        <p>My first React paragraph</p>
        <h1 style={{backgroundColor:'cyan'}}>My heading :{person.Name + ", " + person.job}</h1>
        <h3 style={design}>Second person={person2.Name +" , "+person2.job}</h3>
        <h2>Owaoooo!! React is really WONDERFUL!!!</h2>
      </header>
    </div>
  );
}

export default App;
