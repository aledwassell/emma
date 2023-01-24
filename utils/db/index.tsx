import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAQLdCPgc28vpgpIGJam6IIhBtwrQfo5-A',
  authDomain: 'aled-testing.firebaseapp.com',
  projectId: 'aled-testing',
  storageBucket: 'aled-testing.appspot.com',
  messagingSenderId: '862163374972',
  appId: '1:862163374972:web:c1e85cbed108b8edd64af9',
  measurementId: 'G-F7P05H975Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
