import { FC, useEffect, useState } from "react";
import { HStack, Spacer } from "@chakra-ui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "@emotion/styled";

const StyledWalletButton = styled(WalletMultiButton)`
  background-color: #833bbe;
`;

const Navbar: FC = () => {
  const [showWalletButton, setShowWalletButton] = useState(false);

  useEffect(() => {
    if (!!window) {
      setShowWalletButton(true);
    }
  }, []);
  return (
    <HStack backgroundColor="gray.300" py="1" pr="1">
      <Spacer />
      {showWalletButton && <StyledWalletButton />}
    </HStack>
  );
};

export default Navbar;
