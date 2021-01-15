import { useAuth } from "@lib/auth";

import { Button, Flex } from "@chakra-ui/react";

import { GithubIcon, LogoIcon } from "public/icons";
import EmptyState from "@components/EmptyState";

export default function Home() {
  const auth = useAuth();

  return (
    <Flex as="main" direction="column" justifyContent="center" alignItems="center" h="100vh" w="100vw">
      <LogoIcon color="black" boxSize="32px" />
      {auth?.user ? (
        <EmptyState />
      ) : (
        <Button mt={4} size="sm" onClick={() => auth.signinWithGithub()}>
          <GithubIcon fill="black" boxSize="32px" />
        </Button>
      )}
    </Flex>
  );
}
