import { useAuth } from "@lib/auth";

import { Button, Code, Container, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Container>
        <Heading>Fast Feedback</Heading>
        {auth?.user ? (
          <div>
            <Text>
              Current user: <Code>{auth.user.name}</Code>
            </Text>
            <Button onClick={() => auth.signout()}>Sign Out</Button>
          </div>
        ) : (
          <Button onClick={() => auth.signinWithGithub()}>Sign In</Button>
        )}
      </Container>
    </div>
  );
}
