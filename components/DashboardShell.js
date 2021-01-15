import React from "react";
import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LogoIcon } from "public/icons";

const DashboardShell = ({ children }) => (
  <Flex flexDirection="column">
    <Flex backgroundColor="white" alignItems="center" justifyContent="space-between" p={4}>
      <Stack isInline spacing={4}>
        <LogoIcon color="black" boxSize="32px" />
        <Link>Feedback</Link>
        <Link>Sites</Link>
      </Stack>
      <Flex alignItems="center">
        <Link>Account</Link>
        <Avatar size="sm" />
      </Flex>
    </Flex>
    <Flex backgroundColor="gray.100" p={8} h="100%">
      <Flex>
        <Breadcrumb>
          <BreadcrumbLink>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="black">Sites</BreadcrumbLink>
            </BreadcrumbItem>
            <Heading color="black">Sites</Heading>
            {children}
          </BreadcrumbLink>
        </Breadcrumb>
      </Flex>
    </Flex>
  </Flex>
);

export default DashboardShell;
