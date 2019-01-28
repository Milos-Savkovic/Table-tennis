import firebase from "firebase";

const config = {
  apiKey: "AIzaSyANRbXSzEi5dF5qpRUpOH5cje8jK6LTxUE",
  authDomain: "table-tennis-e89e1.firebaseapp.com",
  databaseURL: "https://table-tennis-e89e1.firebaseio.com",
  projectId: "table-tennis-e89e1",
  storageBucket: "table-tennis-e89e1.appspot.com",
  messagingSenderId: "628676817305"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
