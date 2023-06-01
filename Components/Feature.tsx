import { Heading, Text, VStack } from "@chakra-ui/react";
import CardContainer from "./CardContainer";

const Feature = () => {
  return (
    <VStack
      height={"max-content"}
      width="43vw"
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"20px"}
      borderRadius={"10px"}
      border={"1.5px solid hsla(0,0%,76%,.069)"}
      backgroundColor={"#0f0f12"}
      gap={"3px"}
    >
      <VStack>
        <Heading color={"#ececec"} fontWeight={"600"} fontSize={"25px"}>
          Features
        </Heading>
        <Text
          color="#949494"
          font-weight="400"
          font-size="14px"
          marginLeft={"20px"}
          marginRight={"20px"}
        >
          Simple, responsive and yup - total free.
        </Text>
        <CardContainer />
      </VStack>
    </VStack>
  );
};

export default Feature;
