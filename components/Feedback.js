import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

const Feedback = ({ author, text, createdAt }) => {
  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Heading size="sm" as="h3" mb={0} color="gray.900" fontWeight="medium">
        {author}
      </Heading>
      <Text fontSize="sm" color="gray.400" mb={4}>
        {format(parseISO(createdAt), "PPpp")}
      </Text>
      <Text color="gray.800" mb={4}>
        {text}
      </Text>
      <Divider borderColor="gray.200" backgroundColor="white" />
    </Box>
  );
};

export default Feedback;
