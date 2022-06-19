import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD0zQEWDbEqygrpvJ-dkyGOUsb-Rm14pE",
  authDomain: "lingayat-matrimony.firebaseapp.com",
  projectId: "lingayat-matrimony",
  storageBucket: "lingayat-matrimony.appspot.com",
  messagingSenderId: "545473288545",
  appId: "1:545473288545:web:53d89c410d1f133ed38d20",
  measurementId: "G-Z91DLC3TFS",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
