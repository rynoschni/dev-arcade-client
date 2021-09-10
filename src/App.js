import './App.css';

import {
  Switch,
  Route,
} from 'react-router-dom';
import HomeHeader from "./components/Home/Navbar/HomeHeader";
import HomeHeaderLinks from "./components/Home/Navbar/HomeHeaderLinks";
import Home from './components/Home/Home'
/**
 * Games will be loaded into the Arcade here
 * 
 * 1. Import your Game component from the appropriate `games` directory
 * 2. Create a <Link> to your Game in the Nav
 * 3. Create a corresponding <Route> which includes your Game Component from Step 1
 */

import CounterGame from './games/counter/CounterGame';
import MinesweeperGame from './games/Minesweeper/MinesweeperGame';
import Ping from './components/Ping';
import Rps from './games/rps/Rps'
import Tetris from "./games/tetris/tetris";
import MemoryGame from './games/memory/MemoryGame';

import MyChessBoard from './games/chess/components/MyChessBoard.js';


function App(props) {
  const { ...rest } = props;
  return (
    <div className="App">
      <HomeHeader
        rightLinks={<HomeHeaderLinks />}
        fixed
        color="transparent"
        {...rest}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/counter">
          <CounterGame />
        </Route>
        <Route path="/ping">
          <Ping />
        </Route>
        <Route path="/chess">
          <MyChessBoard />
        </Route>
        <Route path="/memory">
          <MemoryGame />
        </Route>
        <Route path="/minesweeper">
          <MinesweeperGame />
        </Route>
        <Route path="/rps">
          <Rps />
        </Route>
        <Route path="/tetris">
          <Tetris />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
