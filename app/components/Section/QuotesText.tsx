import { Text } from "@chakra-ui/react";
import React from "react";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  weight: "300",
  subsets: ["latin"],
});

interface QuotesTextProps {
  quotes: string;
  author: string;
}

const QuotesText: React.FC<QuotesTextProps> = ({ quotes, author }) => {
  return (
    <div className={newsreader.className}>
      <Text
        color="white"
        textColor="white"
        fontSize="md"
        fontWeight="light"
        fontStyle="italic"
        maxWidth="800px"
        letterSpacing="1px"
      >
        &quot;{quotes}&quot; <br />
        <Text as="span" fontWeight="light" letterSpacing="0px">
          — {author}
        </Text>
      </Text>
    </div>
  );
};

export default QuotesText;
