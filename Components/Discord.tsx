import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { BsDiscord } from "react-icons/Bs";
const Discord = () => {
  return (
    <VStack
      width={"43vw"}
      height={"36vh"}
      borderRadius={"12px"}
      border="1.5px solid hsla(0,0%,76%,.069)"
      backgroundColor={"#0f0f12"}
      //   gap={"5px"}
    >
      {/* <VStack>
        <Image
          bg={"#0f0f12"}
          boxSize="40px"
          width={"80px"}
          //   objectFit="cover"
          src=""
          alt=""
        />
      </VStack> */}
      <VStack
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"16px"}
      >
        <Heading
          display={"flex"}
          flexDir={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap="5px"
          color="#d674fe"
          fontSize={"20px"}
          fontFamily={"Inter, serif"}
          line-height="inherit"
          text-align="center"
        >
          <BsDiscord color="#d674fe" size={"28px"} />
          Discord
        </Heading>
      </VStack>
      <VStack marginTop={"16px"}>
        <Heading color="#ececec" fontSize={"25px"}>
          Join our Discord
        </Heading>
        <Center
          padding={"8px"}
          textAlign={"center"}
          color="#949494"
          font-weight="400"
          font-size="14px"
        >
          We use our Discord server to communicate with our users and listen to
          your feedback. If you need any assistance regarding your xyl account,
          our support team is here to help.
        </Center>
        <Button
          minWidth={"150px"}
          borderRadius={"8px"}
          fontSize={"16px"}
          bg={"#d674fe"}
          font-weight={"500"}
          text-align={"center"}
          margin-bottom={"40px"}
          color="#fff"
          text-decoration="inherit"
          //   line-height={"50px"}
        >
          Join
        </Button>
      </VStack>
    </VStack>
  );
};

export default Discord;
