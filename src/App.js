import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App container">
      {/* search bar */}
      <div className="row">
        <form className="col">
          <div className="form-group">
            <input 
              className="form-control form-control-lg" 
              type="text" 
              placeholder="I need to ... "
              value={''}
            />
            <button type="button" class="btn btn-info col-2"> 
              Submit
            </button>
          </div>
        </form>  
      </div>
      {/*Todo List*/}
      <div className="row">
        <div className="col">
          <ul>

            {/* .map() here */}
            <li>
              List item this is a list item item item a .map() of the todos will be going here weeoeeoooeeeoo
            </li>
            
          </ul>        
        </div>
      </div>
    </div>
  );
}

export default App;
