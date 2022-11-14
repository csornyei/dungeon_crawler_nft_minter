import { FC } from "react";
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Connected: FC = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color="white"
            as="h1"
            size="xl"
            noOfLines={1}
            textAlign="center"
          >
            Welcome to the Dungeon
          </Heading>
          <Text color="bodyText" fontSize="lg" textAlign="center">
            Fight with monster to find new weapons which you can save as NFT,
            trade and use to fight stronger monsters.
          </Text>
        </VStack>
      </Container>

      <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>Find me a monster</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  );
};

export default Connected;
