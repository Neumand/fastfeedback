import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(id, data) {
  console.log(id, data);
  return firestore
    .collection("users")
    .doc(id)
    .set({ id, ...data }, { merge: true });
}
