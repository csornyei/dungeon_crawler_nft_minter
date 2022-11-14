import type { NextPage } from "next";
import Head from "next/head";

import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { useWallet } from "@solana/wallet-adapter-react";

import Navbar from "../components/Navbar";
import Disconnected from "../components/Disconnected";
import Connected from "../components/Connected";

const Container = styled.div`
  background: #1f1f1f;
`;

const IndexPage = () => {
  const { connected } = useWallet();

  return (
    <Container>
      <Head>
        <title>Dungeon Crawler</title>
        <meta name="An NFT based rouge like dungeon crawler game" />
      </Head>

      <Box w="full" h="calc(100vh)">
        <Stack w="full" h="calc(100vh)" justify="center">
          <Navbar />
          <Spacer />
          <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          <Spacer />
          {/* Footer */}
        </Stack>
      </Box>
    </Container>
  );
};

export default IndexPage;
