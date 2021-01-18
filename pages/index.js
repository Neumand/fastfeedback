import { useAuth } from "@lib/auth";

import { Button, Flex } from "@chakra-ui/react";

import { GithubIcon, LogoIcon } from "public/icons";

export default function Home() {
  const auth = useAuth();

  return (
    <Flex as="main" direction="column" justifyContent="center" alignItems="center" h="100vh" w="100vw">
      <LogoIcon color="black" boxSize="32px" />
      {auth?.user ? (
        <Button mt={4} size="sm" onClick={() => auth.signout()}>
          Sign out
        </Button>
      ) : (
        <Button mt={4} size="sm" onClick={() => auth.signinWithGithub()}>
          <GithubIcon fill="black" boxSize="32px" />
          Sign in with GitHub
        </Button>
      )}
    </Flex>
  );
}
