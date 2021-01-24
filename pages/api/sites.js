import { getAllSites } from "@lib/db-admin";

/**
 * @param {Response} res
 */
export default async (_, res) => {
  try {
    const sites = await getAllSites();
    res.json({ sites });
  } catch (error) {
    console.error(`Error fetching sites: ${error}`);
    return;
  }
};
