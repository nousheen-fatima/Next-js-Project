import { HStack, Heading, Text, VStack } from "@chakra-ui/react";

const Mainbody = () => {
  return (
    <VStack
      width={"43vw"}
      height={"36vh"}
      borderRadius={"12px"}
      border="1.5px solid hsla(0,0%,76%,.069)"
      backgroundColor={"#0f0f12"}
      gap={"5px"}
    >
      <VStack marginTop={"35px"} gap={"5px"}>
        <Heading color="#ececec" fontSize={"25px"}>
          Unitedly,how else?
        </Heading>
        <Text padding={"auto 25px"} textAlign={"center"} color="#949494">
          Whether it's a personal profile or something a bit more elaborate,xyl
          has you covered.Simple,responsive, and totally free.
        </Text>
      </VStack>

      <HStack width={"100%"} padding={"10px"} gap={"5px"}>
        <VStack
          w="full"
          border="1.5px solid #d774fe79"
          height="12vh"
          padding={"5px"}
          borderRadius={"12px"}
          color={"white"}
          _hover={{ bg: "#d774fe0e" }}
        >
          <Text fontWeight={"bold"}>Users</Text>
          <Text>4867</Text>
        </VStack>
        <VStack
          w="full"
          height="12vh"
          border="1.5px solid #d774fe79"
          padding={"5px"}
          borderRadius={"12px"}
          color={"white"}
          _hover={{ bg: "#d774fe0e" }}
        >
          <Text fontWeight={"bold"}>Total views</Text>
          <Text>203422 views</Text>
        </VStack>
        <VStack
          w="full"
          border="1.5px solid #d774fe79"
          height="12vh"
          padding={"5px"}
          borderRadius={"12px"}
          color={"white"}
          _hover={{ bg: "#d774fe0e" }}
        >
          <Text fontWeight={"bold"}>Latest member</Text>
          <Text>Novias</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Mainbody;
