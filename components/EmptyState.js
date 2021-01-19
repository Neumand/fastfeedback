import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";
import AddSiteModal from "./AddSiteModal";

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
        <AddSiteModal />
      </Flex>
    </DashboardShell>
  );
};

export default EmptyState;
