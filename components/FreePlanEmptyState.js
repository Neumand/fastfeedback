import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";


const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box w="100%" backgroundColor="white">
        <Heading size="md">Get feedback on your site instantly.</Heading>
        <Text>Start today, then grow with us 🌱</Text>
      </Box>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
