import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CityList from './CityList';
import Staff from './Staff';


function App() {
  return (
    <div className="Container">
      <div className='row-6'>
        <CityList/>
        <Staff/>
      </div>
    </div>
  );
}

export default App;
