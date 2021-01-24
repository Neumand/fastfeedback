import Feedback from "@components/Feedback";
import { getAllFeedback, getAllSites } from "@lib/db-admin";

const SiteFeedback = ({ initialFeedback }) => {
  return initialFeedback.map(feedback => <Feedback key={feedback.id} {...feedback} />);
};

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const feedback = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedback,
    },
  };
}

export async function getStaticPaths() {
  const sites = await getAllSites();
  const paths = sites.map(site => ({
    params: {
      siteId: site.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default SiteFeedback;
