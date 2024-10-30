import { Text } from "@chakra-ui/react";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

interface AnnpuncementTypeProps {
  textContent: string;
}

const AnnouncementType: React.FC<AnnpuncementTypeProps> = ({ textContent }) => {
  return (
    <div className={poppins.className}>
      <Text color="white" textColor="white" fontSize="md" letterSpacing={2} marginBottom="40px" zIndex={4}>
        {textContent}
      </Text>
    </div>
  );
};

export default AnnouncementType;
