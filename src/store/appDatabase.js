import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

firebase.initializeApp({
  apiKey: 'AIzaSyC5s9mawuMRK8_Cs9CBgamsvYyRlC7z55g',
  authDomain: 'reactfirebase-db.firebaseapp.com',
  projectId: 'reactfirebase-db',
  storageBucket: 'reactfirebase-db.appspot.com',
  messagingSenderId: '206170606941',
  appId: '1:206170606941:web:4b21ce00963ca4211facb4',
  measurementId: 'G-05EVBL5PLB',
});

firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true, merge: true });

export default firebase;
