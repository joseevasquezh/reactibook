import firebase from 'firebase';
import { config } from './firebase-config';


const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;