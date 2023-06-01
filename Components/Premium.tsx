import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { BsStarFill } from "react-icons/Bs";
const Premium = () => {
  return (
    <VStack
      height={"max-content"}
      width="43vw"
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      padding={"20px"}
      borderRadius={"10px"}
      border={"1.5px solid hsla(0,0%,76%,.069)"}
      backgroundColor={"#0f0f12"}
      gap={"3px"}
    >
      <VStack alignItems={"flex-start"}>
        <Heading color={"#ececec"} fontWeight={"600"} fontSize={"25px"}>
          xyl Premium®
        </Heading>
        <Text color="#949494">
          <del>$4.99</del>
          <b> $2.99 </b>/ lifetime
        </Text>

        <Button gap={"8px"} color={"#d674fe"}>
          <BsStarFill />
          Purchase
        </Button>
      </VStack>
    </VStack>
  );
};

export default Premium;
