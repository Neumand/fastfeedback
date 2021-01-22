import React from "react";
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
} from "@chakra-ui/react";

import { LogoIcon } from "public/icons";
import { useAuth } from "@lib/auth";
import AddSiteModal from "./AddSiteModal";

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        p={4}
        py={4}
        px={8}>
        <Stack isInline spacing={4}>
          <LogoIcon color="black" boxSize="24px" />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          {user && (
            <Button variant="ghost" mr={2} onClick={() => signout()}>
              Log Out
            </Button>
          )}
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" backgroundColor="gray.100" p={8} h="100vh">
        <Flex maxW="800px" w="100%" direction="column" margin="0 auto">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between">
            <Heading mb={4} color="black">
              My Sites
            </Heading>
            <AddSiteModal>+ Add Site</AddSiteModal>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
