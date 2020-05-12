import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {

  const config = {
    apiKey: "AIzaSyA_3uI-Dg-Yxx1KkudDH0odzIAYeIiv014",
    authDomain: "slack-by-vue.firebaseapp.com",
    databaseURL: "https://slack-by-vue.firebaseio.com",
    projectId: "slack-by-vue",
    storageBucket: "slack-by-vue.appspot.com",
    messagingSenderId: "424625756186"
  }
  firebase.initializeApp(config)
}

//initialize App
const db = firebase.firestore()
export {
  firebase,
  db
}