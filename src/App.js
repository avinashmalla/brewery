import './App.css';
import SearchBrewers from './components/SearchBrewers';
import BreweryDetails from './components/BreweryDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route exact path='/' element={<SearchBrewers />} />
            <Route path = '/:brewer' element = {<BreweryDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
