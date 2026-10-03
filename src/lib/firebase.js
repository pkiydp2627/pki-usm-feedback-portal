import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Standard Firebase web credentials for the PKI Feedback Portal.
// Environment variables take precedence if defined (e.g. in Cloudflare Pages dashboard),
// with secure project defaults as fallback so client-side builds never crash with undefined projectId.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyCddW1oWo0qfRveSJrG0n-nY_c04IDeMTg',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'kural-37862.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'kural-37862',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'kural-37862.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '366952536869',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:366952536869:web:f89d8832ccbc9b8d6f18cc',
};

let app;
let db;
let auth;

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getFirestore(app);
  auth = getAuth(app);
} catch (err) {
  console.error('[PKI Portal] Failed to initialize Firebase:', err);
}

export { app, db, auth };
export default app;

