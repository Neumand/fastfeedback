import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(id, data) {
  return firestore
    .collection("users")
    .doc(id)
    .set({ id, ...data }, { merge: true });
}

export function createSite(data) {
  return firestore.collection("sites").add(data);
}

export function createFeedback(data) {
  return firestore.collection("feedback").add(data);
}

export function deleteFeedback(feedbackId) {
  return firestore.collection("feedback").doc(feedbackId).delete();
}
