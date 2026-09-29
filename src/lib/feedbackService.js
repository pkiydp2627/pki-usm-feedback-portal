// Firestore data access layer for the "feedback" collection.
//
// Document shape:
// {
//   title: string,
//   category: 'Academic'|'Welfare'|'Sports'|'Culture'|'Facilities'|'Events'|'Others',
//   description: string,
//   isAnonymous: boolean,
//   visibility: 'private',
//   name: string | null,        // omitted when isAnonymous is true
//   matricNumber: string | null,
//   phone: string | null,
//   email: string | null,
//   status: 'New' | 'In Progress' | 'Resolved',
//   createdAt: serverTimestamp,
// }

import { db } from './firebase';
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const FEEDBACK_COLLECTION = 'feedback';

export async function submitFeedback(payload) {
  const {
    title,
    category,
    description,
    isAnonymous,
    visibility,
    name,
    matricNumber,
    phone,
    email,
  } = payload;

  return addDoc(collection(db, FEEDBACK_COLLECTION), {
    title,
    category,
    description,
    isAnonymous,
    visibility,
    name: isAnonymous ? null : name || null,
    matricNumber: isAnonymous ? null : matricNumber || null,
    phone: isAnonymous ? null : phone || null,
    email: isAnonymous ? null : email || null,
    status: 'New',
    createdAt: serverTimestamp(),
  });
}

// Subscribes to all feedback (committee dashboard use). Returns an unsubscribe fn.
export function subscribeToFeedback(callback) {
  const q = query(collection(db, FEEDBACK_COLLECTION), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(items);
  });
}

export async function updateFeedbackStatus(id, status) {
  const ref = doc(db, FEEDBACK_COLLECTION, id);
  return updateDoc(ref, { status });
}

// Permanently deletes a feedback submission. Committee-only (enforced by
// firestore.rules — only signed-in accounts may delete).
export async function deleteFeedbackItem(id) {
  const ref = doc(db, FEEDBACK_COLLECTION, id);
  return deleteDoc(ref);
}
