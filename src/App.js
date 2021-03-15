import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/header.component'
import Homepage from './pages/Homepage/homepage.component'
import Shop from './pages/Shop/shop.component'
import SignInPage from './pages/Sign-In-Page/sign-in-page.component'
import { auth, createUserDoc } from './firebase/firebase.utils'

import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDoc(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      }
      else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInPage} />
        </Switch>
      </div>
    )
  }
}