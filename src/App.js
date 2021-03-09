import { Route, Switch } from 'react-router-dom'

import './App.css';

import Homepage from './pages/Homepage/homepage.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        {/* <Route path='/hats' component={HatsPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
