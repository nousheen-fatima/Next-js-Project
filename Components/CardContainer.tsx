import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { BsCpu } from "react-icons/Bs";
import { FaHeadset, FaMusic } from "react-icons/Fa";
import { HiShare } from "react-icons/Hi";
import { RxDragHandleDots2 } from "react-icons/Rx";
import { TfiHarddrives } from "react-icons/Tfi";

const cardData = [
  {
    title: "Responsive",
    desc: "Look great at every screen right out of the box, from phones to desktops.",
    icon: <RxDragHandleDots2 fontSize="2xl" color="#d674fe" />,
  },
  {
    title: "Music",
    desc: "Choose any music for your profile to express your style",
    icon: <FaMusic fontSize="2xl" color="#d674fe" />,
  },
  {
    title: "Customizable",
    desc: "Customize your profile with ease. Banner, music whatever you'd like.",
    icon: <HiShare fontSize="2xl" color="#d674fe" />,
  },
  {
    title: "Support",
    desc: "Our service comes with around the clock support, always willing to assist any issues you may have.",
    icon: <FaHeadset fontSize="2xl" color="#d674fe" />,
  },
  {
    title: "Uptime",
    desc: "Designes with high availability in mind to ensure our systems are fault tolerant,allowing you to interect without limits.",
    icon: <TfiHarddrives fontSize="2xl" color="#d674fe" />,
  },
  {
    title: "Technology Focused",
    desc: "We are always working on new ways to improve our service to ensure users have the best experience.",
    icon: <BsCpu fontSize="2xl" color="#d674fe" />,
  },
];

const CardContainer = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
      {cardData.map((data, index) => (
        <GridItem key={index}>
          <Box
            borderWidth="1px"
            borderRadius="md"
            p={4}
            width="260px"
            h={"180px"}
          >
            <Text fontSize="lg">{data.icon}</Text>
            <Text fontWeight="bold" fontSize="xl" mt={2} color="#ececec">
              {data.title}
            </Text>
            <Text color="#949494" mt={2}>
              {data.desc}
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default CardContainer;
