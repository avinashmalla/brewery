import './App.css';
import SearchBrewers from './components/SearchBrewers.js';
import BreweryDetails from './components/BreweryDetails.js';
import DataTable from './components/DataTable.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
        <div className="App">
        <NavBar />
          <div>
            <Routes>
              <Route exact path='/' element={<SearchBrewers />} />
              <Route path='/:brewer' element={<BreweryDetails />} />
              <Route path='/datatable' element={<DataTable />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
