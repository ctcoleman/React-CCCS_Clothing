import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import Header from './components/header/header.component'
import Homepage from './pages/Homepage/homepage.component'
import Shop from './pages/Shop/shop.component'
import SignInPage from './pages/Sign-In-Page/sign-in-page.component'
import setCurrentUser from './redux/user/user.actions';
import { auth, createUserDoc } from './firebase/firebase.utils'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDoc(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInPage} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(App)