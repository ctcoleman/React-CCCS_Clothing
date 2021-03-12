import { Route, Switch } from 'react-router-dom'

import './App.css';

import Homepage from './pages/Homepage/homepage.component'
import Shop from './pages/Shop/shop.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
