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

export const createUserDoc = async (userAuth, otherData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData
      })
    } catch (err) { console.log('error creating user', err.message) }
  }

  return userRef
} 

firebase.initializeApp(config)


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase