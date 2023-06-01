import { Button, Flex } from "@chakra-ui/react";

export type TabType = "Home" | "Feature" | "Premium" | "Discord";
const navTabs: TabType[] = ["Home", "Feature", "Premium", "Discord"];

const SubNavbar = ({ handleTab }: { handleTab: (t: TabType) => void }) => {
  return (
    <Flex
      height={"8vh"}
      width="43vw"
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"5px"}
      borderRadius={"10px"}
      border={"1.5px solid hsla(0,0%,76%,.069)"}
      backgroundColor={"#0f0f12"}
      gap={"3px"}
    >
      {navTabs.map((item, idx) => (
        <Button
          cursor={"pointer"}
          onClick={() => handleTab(item)}
          key={idx}
          colorScheme="blackAlpha"
          _focus={{ boxShadow: "outline" }}
          bg={"transparent"}
          color={"#D674FE"}
          width="25%"
          h="full"
        >
          {item}
        </Button>
      ))}
    </Flex>
  );
};

export default SubNavbar;
