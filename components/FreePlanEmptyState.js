import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";


const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box w="100%" backgroundColor="white">
        <Heading size="md">Get feedback on your site instantly.</Heading>
        <Text>Start today, then grow with us 🌱</Text>
        <Button>Add Your First Site</Button>
      </Box>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
