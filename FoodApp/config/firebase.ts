
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  constants  from "expo-constants";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: constants.manifest?.extra?.apikey,
  authDomain: constants.manifest?.extra?.authDomain,
projectId: constants.manifest.extra.projectId,
  storageBucket: constants.manifest.extra?.storageBucket,
  messagingSenderId: constants.manifest.extra?.measurementId,
  appId: constants.manifest.extra?.appId,
  measurementId: constants.manifest.extra?.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);