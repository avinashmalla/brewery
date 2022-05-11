import './App.css';
import SearchBrewers from './components/SearchBrewers';
import BreweryDetails from './components/BreweryDetails';
import DataTable from './components/DataTable';
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
