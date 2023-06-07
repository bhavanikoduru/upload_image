import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
   
  apiKey: "AIzaSyDZdT0NcfcFeHz7uZghAEJoPVuMFG45ekU",
  authDomain: "uploadimage-a9fbf.firebaseapp.com",
  projectId: "uploadimage-a9fbf",
  storageBucket: "uploadimage-a9fbf.appspot.com",
  messagingSenderId: "1060970687956",
  appId: "1:1060970687956:web:247134f4235198dc8eba41"


  };

  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);