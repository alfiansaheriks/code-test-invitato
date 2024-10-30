import { Heading } from '@chakra-ui/react';
import { Newsreader } from 'next/font/google';
import React from 'react'

interface NameRightSectionProps {
    girlsName: string;
    boysName: string;
    hashtag: string;
    }

const newsreader = Newsreader({
    weight: "300",
    subsets: ["latin"],
    });

const NameRightSection: React.FC<NameRightSectionProps> = ({ girlsName, boysName, hashtag }) => {
  return (
    <div>
    <Heading
        marginTop={{ base: 16, md: 24, lg: 28, xl: 36 }}
        size="4xl"
        fontSize="4xl"
        fontFamily={newsreader.className}
        fontWeight="light"
        textTransform="uppercase"
      >
        {girlsName} & {boysName}
      </Heading>
      <Heading
        marginTop={0.5}
        size="4xl"
        fontSize="4xl"
        fontFamily={newsreader.className}
        fontWeight="light"
        fontStyle="italic"
      >
        {hashtag}
      </Heading>
      </div>
  )
}

export default NameRightSection