import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayerList from './Composants/PlayerList';
import MyContext  from './context'
import AddPlayer from './Composants/AddPlayer';
import {Route, BrowserRouter,Switch} from 'react-router-dom'
import NavBar from './Composants/NavBar';
import Home from './Composants/Home';
import PageNotFound from './Composants/PageNotFound';

function App() {
  return (
  
  <MyContext>
    <BrowserRouter>

      <NavBar/>
      <Switch>
      
              <Route exact path='/Home'component={Home}/> 

              <Route exact path='/AddPlayer'  component={AddPlayer}/>

              <Route exact path='/PlayerList' component={PlayerList}/>
              <Route  component={PageNotFound}/>

      </Switch>
      

      


    </BrowserRouter>
  </MyContext>
    
  );
}

export default App;

