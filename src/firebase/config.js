import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCAst0zY5p_OiUeQ5NY1O5QdvO4sPrsdMU",
    authDomain: "finance-app-tracker-bdd4a.firebaseapp.com",
    projectId: "finance-app-tracker-bdd4a",
    storageBucket: "finance-app-tracker-bdd4a.appspot.com",
    messagingSenderId: "445070371653",
    appId: "1:445070371653:web:e2e6ef66e7bf3708f82c2c"
  };

  // initialise firebase using firebase config
  firebase.initializeApp(firebaseConfig)

  // initialise individual service
  const projectFirestore = firebase.firestore()

  const projectAuth = firebase.auth()

export {projectFirestore, projectAuth}




