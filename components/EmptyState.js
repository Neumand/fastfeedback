import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";

const EmptyState = () => {
  return (
    <DashboardShell>
      <Flex
        w="100%"
        borderRadius="8px"
        backgroundColor="white"
        p={8}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Heading size="md" mb={2}>
          You haven't added any sites.
        </Heading>
        <Text mb={4}>Welcome 👋 Let's get started.</Text>
        <Button color="white" backgroundColor="black" maxW="200px" fontWeight="medium">
          Add Your First Site
        </Button>
      </Flex>
    </DashboardShell>
  );
};

export default EmptyState;
