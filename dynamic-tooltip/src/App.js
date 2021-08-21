
import './App.css';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="App">
      <p><span className="add-tooltip" data-tooltip="This will be your Username">Name</span></p>
      <p><span className="add-tooltip" data-tooltip="This will be your Email Id">Email Id</span></p>
      <Tooltip/>
    </div>
  );
}

export default App;
