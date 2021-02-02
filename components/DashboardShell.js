import React from "react";
import NextLink from "next/link";
import {
  Avatar,
  Button,
  Flex,
  Link,
  Stack,
} from "@chakra-ui/react";

import { LogoIcon } from "public/icons";
import { useAuth } from "@lib/auth";

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
          <NextLink href="/" passHref>
            <LogoIcon color="black" boxSize="24px" />
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
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
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
