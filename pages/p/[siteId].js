import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

import Feedback from "@components/Feedback";
import { useAuth } from "@lib/auth";
import { createFeedback } from "@lib/db";
import { getAllFeedback, getAllSites } from "@lib/db-admin";

const SiteFeedback = ({ initialFeedback }) => {
  const { user } = useAuth();
  const router = useRouter();
  const inputRef = useRef(null);
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  const { siteId } = router.query;

  const onAddFeedback = e => {
    e.preventDefault();

    const newFeedback = {
      author: user.name,
      authorId: user.uid,
      siteId,
      text: inputRef.current.value,
      status: "pending",
      provider: user.provider,
      createdAt: new Date().toISOString(),
    };

    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  };

  return (
    <Box display="flex" flexDirection="column" width="full" maxWidth="700px" margin="0 auto">
      <Box as="form" onSubmit={onAddFeedback}>
        <FormControl mt={8}>
          <FormLabel htmlFor="comment">Comment</FormLabel>
          <Input ref={inputRef} type="comment" id="comment"></Input>
          <Button type="submit" size="sm" fontWeight="medium" mt={2}>
            Add comment
          </Button>
        </FormControl>
      </Box>
      {allFeedback.map(feedback => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
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
