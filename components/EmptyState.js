import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";

const EmptyState = () => {
  return (
    <DashboardShell>
      <Box w="100%" backgroundColor="white">
        <Heading size="md">You haven't added any sites.</Heading>
        <Text>Welcome 👋 Let's get started</Text>
        <Button>Add Your First Site</Button>
      </Box>
    </DashboardShell>
  );
};

export default EmptyState;
