import { Route, Switch } from 'react-router-dom'

import './App.css';

import Header from './components/header/header.component'
import Homepage from './pages/Homepage/homepage.component'
import Shop from './pages/Shop/shop.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
