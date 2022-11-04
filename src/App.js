import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CalculateScore from './CalculateScore';
import ScoreForm from './ScoreForm';

function App() {
  return (
    <div className="Container">
      <div className='row-6'>
        <ScoreForm/>
        <CalculateScore/>
      </div>
    </div>
  );
}

export default App;
