import Home from './pages/Home';
import Book from './pages/Book';
import SavedBooks from './pages/SavedBooks';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/book/:id' component={Book} />
        <Route exact path='/savedbooks' component={SavedBooks} />
      </Switch>
    </div>
  );
}

export default App;
