import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { About } from './views/About';
import { Home } from './views/Home';
import { MovieDetail } from './views/MovieDetail';

function App() {



  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/movie/:id">
            <MovieDetail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
