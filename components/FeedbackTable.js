import React from "react";
import { Box, Code, Switch } from "@chakra-ui/react";

import { Table, Tr, Th, Td } from "./Table";
import DeleteButtonDialog from "./DeleteButtonDialog";

const FeedbackTable = ({ feedback: allFeedback }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map(feedback => (
          <Box key={feedback.id} as="tr">
            <Td fontWeight="medium">{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{`/`}</Code>
            </Td>
            <Td>
              <Switch colorScheme="green" defaultChecked={feedback.status === "active"}></Switch>
            </Td>
            <Td>
              <DeleteButtonDialog id={feedback.id} />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
