import './App.css';
import MyHeader from './components/header'
import GameZone from './components/gamezone';

function App() {
  return (
    <div className="App">
      <MyHeader value="values" />        
      <GameZone/>
    </div>
  );
}

export default App;
