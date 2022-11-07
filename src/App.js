import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CalculateScore from './CalculateScore';
import ScoreForm from './ScoreForm';
import TicTacToe from './TicTacToe';
import DynamicForm from './DynamicForm';

function App() {
  return (
    <div className="Container">
      <div className='row-6'>
        <TicTacToe/>
        <ScoreForm/>
        <CalculateScore/>
      </div>
    </div>
  );
}

export default App;
