import db from "@lib/firebase-admin";

export default async (_, res) => {
  try {
    const snapshot = await db.collection("sites").get();
    const sites = [];
    snapshot.forEach(doc => sites.push({ id: doc.id, ...doc.data() }));
    res.json(sites);
  } catch (error) {
    console.error(`Error fetching document: ${error}`);
    return;
  }
};
