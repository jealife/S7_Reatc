import "./styles.css";
import PlayerList from './Composants/PlayerList';
import SAJA  from './context'
import Fields from './Composants/Fields';
function App() {
  return (
    <SAJA>
    <div className="App">
      <PlayerList/>

       <Fields
       
    label="Nom :"
    
    />
    </div>
    </SAJA>

   
  );
}

export default App;
