import type { NextPage } from "next";

import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Discord from "../Components/Discord";
import Feature from "../Components/Feature";
import Mainbody from "../Components/Mainbody";
import Navbar from "../Components/Navbar";
import Premium from "../Components/Premium";
import SubNavbar, { TabType } from "../Components/SubNavbar";
const Home: NextPage = () => {
  const [tab, setTab] = useState<TabType>("Home");
  const handleTab = (t: TabType) => {
    setTab(t);
  };

  const Tabs = {
    Home: <Mainbody />,
    Feature: <Feature />,
    Premium: <Premium />,
    Discord: <Discord />,
  };

  return (
    <Flex
      bg={"#0a0a0c"}
      minH={"100vh"}
      h={"max-content"}
      py="50px"
      width={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={"10px"}
    >
      <Navbar />
      <SubNavbar handleTab={handleTab} />
      {Tabs[tab]}
    </Flex>
  );
};

export default Home;
