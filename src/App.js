import './App.css';
import { Counter } from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter count1={0}/>
      </header>
    </div>
  );
}

export default App;
