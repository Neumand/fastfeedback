import { getUserSites } from "@lib/db-admin";
import { auth } from "firebase-admin";

/**
 * @param {Request} req
 * @param {Response} res
 */
export default async (req, res) => {
  try {
    const { uid } = await auth().verifyIdToken(req.headers.token);
    const sites = await getUserSites(uid);
    res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ error });
  }
};
