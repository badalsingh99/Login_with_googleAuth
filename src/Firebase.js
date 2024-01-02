import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAp1Q_wQ9U9A2T6Q7o-xjoTPRlbocQlIRI",
  authDomain: "auth-5ce4b.firebaseapp.com",
  projectId: "auth-5ce4b",
  storageBucket: "auth-5ce4b.appspot.com",
  messagingSenderId: "506181936049",
  appId: "1:506181936049:web:75333b898dd775eb3b5390",
  measurementId: "G-H8F021YFWP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
