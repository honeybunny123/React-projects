import Header from './components/Header';
import Body from './components/Body';
import {themes, ThemeContext} from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>    
  );
}

export default App;
