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
            <button type="button" class="btn btn-info col-2"> Submit </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
