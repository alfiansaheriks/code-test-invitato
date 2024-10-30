import { Heading, SlideFade, Text } from "@chakra-ui/react";
import { Newsreader, Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface GreetingTextProps {
  greetingsText: string;
  invitedText: string;
  welcomeText: string;
  wordsOfWisdom: string;
}

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  //   weight: "300",
  subsets: ["latin"],
});

const GreetingText: React.FC<GreetingTextProps> = ({
  greetingsText,
  welcomeText,
  wordsOfWisdom,
  invitedText,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <div className={poppins.className}>
        <Text color="black" textColor="black" fontSize="xs" letterSpacing={2}>
          {greetingsText},
        </Text>
        <Text
          color="black"
          textColor="black"
          fontSize="xs"
          letterSpacing={2}
          marginBottom="40px"
        >
          {invitedText}
        </Text>
      </div>
      <motion.div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }} 
        >
          <SlideFade
            in={isInView}
            offsetY="40px"
            transition={{ enter: { duration: 1 } }}
          >
            <Heading
              display="flex"
              size="4xl"
              fontFamily={newsreader.className}
              fontWeight="semibold"
              fontSize="4xl"
              color="black"
              marginBottom="20px"
              maxWidth="300px"
              justifyContent="center"
              alignItems="center"
              mx="auto"
            >
              {welcomeText}
            </Heading>
          </SlideFade>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }} 
        >
          <SlideFade
            in={isInView}
            offsetY="40px"
            transition={{ enter: { duration: 1 } }}
          >
            <Heading
              display="flex"
              size="4xl"
              fontFamily={newsreader.className}
              fontWeight="light"
              fontSize="lg"
              fontStyle="italic"
              color="black"
              marginBottom="30px"
              justifyContent="center"
              alignItems="center"
              lineHeight={1.5}
            >
              {wordsOfWisdom}
            </Heading>
          </SlideFade>
        </motion.div>
      </motion.div>
    </>
  );
};

export default GreetingText;
