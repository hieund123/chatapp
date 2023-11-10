import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6hxhoxaFgh85Gr5egPVyd-AkQju6fnO0",
  authDomain: "chat-3db72.firebaseapp.com",
  projectId: "chat-3db72",
  storageBucket: "chat-3db72.appspot.com",
  messagingSenderId: "18637879123",
  appId: "1:18637879123:web:2c358702ec7c944d3813a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
