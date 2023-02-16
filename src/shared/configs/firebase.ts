import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBVLfev-v1Ytp11vyasyegEsDGM9sl7AA",
  authDomain: "upload-image-dc02f.firebaseapp.com",
  projectId: "upload-image-dc02f",
  storageBucket: "upload-image-dc02f.appspot.com",
  messagingSenderId: "1026877350515",
  appId: "1:1026877350515:web:10093e4ef6c8906a004006",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
