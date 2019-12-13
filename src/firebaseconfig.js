import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBt9-shE-WGJ539q34-weQU2Ahtdx-dspA",
    authDomain: "burger-queen-1674f.firebaseapp.com",
    databaseURL: "https://burger-queen-1674f.firebaseio.com",
    projectId: "burger-queen-1674f",
    storageBucket: "burger-queen-1674f.appspot.com",
    messagingSenderId: "78047223290",
    appId: "1:78047223290:web:17ae9a27d75664e7ea9843",
    measurementId: "G-PWSWC35MLE"
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
 
  export default firebaseApp;
  