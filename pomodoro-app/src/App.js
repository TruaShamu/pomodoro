import logo from './logo.svg';
import './App.css';
import PomodoroApp from './components/PomodoroApp.jsx';
function App() {
  return (
    <div className="App">
      <PomodoroApp focusDuration={0.1 * 60} breakDuration={0.1 * 60} />
    </div>
  );
}

export default App;
