import Head from "next/head";
import { Button, Flex } from "@chakra-ui/react";

import { useAuth } from "@lib/auth";
import { GithubIcon, LogoIcon } from "public/icons";

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      w="100vw">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes("fast-feedback-auth")) {
            window.location.href = "/dashboard";
          }
        `,
          }}
        />
      </Head>
      <LogoIcon color="black" boxSize="32px" />
      {auth?.user ? (
        <Button mt={4} size="sm">
          <a href="/dashboard">Go to dashboard</a>
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
