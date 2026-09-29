// Firebase configuration template
//
// 1. Create a project at https://console.firebase.google.com
// 2. Enable Firestore Database (start in production mode) and Authentication
//    (Email/Password provider, used only for the committee/admin login).
// 3. Copy .env.example to .env and fill in the values from
//    Project settings > General > Your apps > SDK setup and configuration.
// 4. Deploy the security rules in firestore.rules (see project root) so
//    students can only create feedback, never read/edit/delete it, and only
//    authenticated committee accounts can read and update it.

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
