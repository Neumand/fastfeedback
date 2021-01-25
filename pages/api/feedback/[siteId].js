import { getAllFeedback } from "@lib/db-admin";

/**
 * @param {Request} req
 * @param {Response} res
 */
export default async (req, res) => {
  const siteId = req.query.siteId;
  const { feedback, error } = await getAllFeedback(siteId);

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ feedback });
};
