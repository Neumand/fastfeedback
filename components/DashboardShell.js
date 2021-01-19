import React from "react";
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Link,
  Stack,
} from "@chakra-ui/react";
import { LogoIcon } from "public/icons";
import { useAuth } from "@lib/auth";

const DashboardShell = ({ children }) => {
  const { user } = useAuth();
  
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
        <Flex alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={user.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} h="100vh">
        <Flex maxW="800px" w="100%" direction="column" ml="auto" mr="auto">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4} color="black">
            Sites
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );};

export default DashboardShell;
