import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAXpRaHnYshkonmdZT04ovvA2F-l-SdNZY",
  authDomain: "chatgpt-clone-6ee52.firebaseapp.com",
  projectId: "chatgpt-clone-6ee52",
  storageBucket: "chatgpt-clone-6ee52.firebasestorage.app",
  messagingSenderId: "124312635822",
  appId: "1:124312635822:web:995ceee1a0ae05a937a03f"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db};