import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './components/Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <div>
    <h1 className="text-center text-info">No idea what to eat?</h1>
    <h3 className="text-center text-warning">Thousands of recipes just a click away. Give it a try!!</h3>
    <Recipe/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));