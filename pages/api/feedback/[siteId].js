import { getAllFeedback } from "@lib/db-admin";

/**
 * @param {Request} req
 * @param {Response} res
 */
export default async (req, res) => {
  try {
    const siteId = req.query.siteId;
    const feedback = await getAllFeedback(siteId);
    res.status(200).json({ feedback });
  } catch (error) {
    console.error(`Error fetching feedback: ${error}`);
    return;
  }
};
