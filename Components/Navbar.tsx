import { Button, Flex, HStack } from "@chakra-ui/react";
import { ImCross } from "react-icons/Im";

const Navbar = () => {
  return (
    <Flex
      padding="5px"
      width="43vw"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <ImCross size={"28px"} color="#d674fe" />
      <HStack>
        <Button
          size="sm"
          colorScheme="blackAlpha"
          color="#727277fd"
          w={"80px"}
          variant={"outline"}
        >
          Login
        </Button>
        <Button size="sm" width={"80px"} colorScheme="facebook">
          Signup
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
