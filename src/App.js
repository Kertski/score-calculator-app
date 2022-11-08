import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CalculateScore from './CalculateScore';
import ScoreForm from './ScoreForm';
import TicTacToe from './TicTacToe';
import CityList from './CityList';


function App() {
  return (
    <div className="Container">
      <div className='row-6'>
        <CityList/>
        <TicTacToe/>
        <ScoreForm/>
        <CalculateScore/>
      </div>
    </div>
  );
}

export default App;
