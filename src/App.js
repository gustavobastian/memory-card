import './App.css';
import MyHeader from './components/header'
import GameZone from './components/gamezone';

function App() {
  return (
    <div className="App">
      <MyHeader value="values" />        
      <GameZone value={[0,1,2,3,4,5,6,7,8]}/>
    </div>
  );
}

export default App;
