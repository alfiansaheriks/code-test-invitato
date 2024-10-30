import React from "react";
import { Newsreader } from "next/font/google";
import { Heading, Text } from "@chakra-ui/react";
import localFont from "next/font/local";

const newsreader = Newsreader({
  weight: "300",
  subsets: ["latin"],
});

const butler = localFont({
  // name: "Butler",
  weight: "200",
  src: "./Butler_Light.otf",
});

interface NameTextProps {
  girlsName: string;
  boysName: string;
}

const NameText: React.FC<NameTextProps> = ({ girlsName, boysName }) => {
  return (
    <div>
      <Heading
        size="4xl"
        fontFamily={newsreader.className}
        fontWeight="light"
        fontSize="7xl"
        textTransform="uppercase"
      >
        {girlsName} &
      </Heading>
      <Heading
        marginTop="-16px"
        size="7xl"
        fontFamily={newsreader.className}
        fontWeight="light"
        fontSize="7xl"
        textTransform="uppercase"
      >
        {boysName}
      </Heading>
    </div>
  );
};

export default NameText;
