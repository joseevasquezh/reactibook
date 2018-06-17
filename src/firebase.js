import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { config } from './firebase-config';


const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;