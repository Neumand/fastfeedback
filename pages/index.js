import Head from "next/head";
import { Button, Flex } from "@chakra-ui/react";
import {  } from '@chakra-ui/icons'

import { useAuth } from "@lib/auth";
import { GithubIcon, GoogleIcon, LogoIcon } from "public/icons";

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#edf2f7"
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
        <>
          <Button
            mt={4}
            maxW="243px"
            size="lg"
            backgroundColor="gray.900"
            color="white"
            leftIcon={<GithubIcon w={8} h={8} />}
            fontWeight="medium"
            onClick={() => auth.signinWithGithub()}
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.800", transform: "scale(0.95)" }}>
            Sign in with GitHub
          </Button>
          <Button
            mt={4}
            maxW="243px"
            size="lg"
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            leftIcon={<GoogleIcon />}
            fontWeight="medium"
            onClick={() => auth.signinWithGoogle()}
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "gray.100", transform: "scale(0.95)" }}>
            Sign in with Google
          </Button>
        </>
      )}
    </Flex>
  );
}
