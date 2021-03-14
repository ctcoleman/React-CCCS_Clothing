import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBAXcu4YIJ_aHSvUHb3wd9Rl4wo8zGSzgQ",
  authDomain: "react-ecommerce-f7697.firebaseapp.com",
  projectId: "react-ecommerce-f7697",
  storageBucket: "react-ecommerce-f7697.appspot.com",
  messagingSenderId: "425056020380",
  appId: "1:425056020380:web:342a0810c50dd579fe4a59",
  measurementId: "G-FGR8DVYTTZ"
}

firebase.initializeApp(config)


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase