import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBsDT4HuB0bBujoogAe2vzF9awIOjEteTY",
  authDomain: "trabalhossenai-20fc8.firebaseapp.com",
  projectId: "trabalhossenai-20fc8",
  storageBucket: "trabalhossenai-20fc8.appspot.com",
  messagingSenderId: "801200346239",
  appId: "1:801200346239:web:838730529b9f8cd3b95b4a"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
