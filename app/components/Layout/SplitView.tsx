"use client";

import { Box, Button, Flex, Heading, SlideFade } from "@chakra-ui/react";
import DesktopImage from "../../../public/img/Desktop.jpg";
import AnnouncementType from "../Section/AnnouncementType";
import NameText from "../Section/NameText";
import QuotesText from "../Section/QuotesText";
import { useEffect, useState } from "react";
import NameRightSection from "../Section/NameRightSection";
import { Newsreader } from "next/font/google";
import RightSection from "./RightSection";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { keyframes } from "@emotion/react";

const newsreader = Newsreader({
  weight: "300",
  subsets: ["latin"],
});

const slideUpandDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const SplitView = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [afterBg, setAfterBg] = useState("shadow.1");
  const [backgroundImage, setBackgroundImage] = useState(
    "url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg')"
  );

  const handleNextSection = () => {
    setCurrentSection(1);
    setBackgroundImage("none");
    setAfterBg("");
    handlePlayMusic();
  };

  const handlePlayMusic = () => {
    if (!audio) {
      const newAudio = new Audio("/audio/Good Life.mp3");
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }

  const handleResumeandPauseMusic = () => {
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  }

  return (
    <Flex
      height="100vh"
      position="relative"
      // _after={{
      //   content: '""',
      //   position: "absolute",
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   bottom: 0,
      //   bg: "blackAlpha.400",
      //   zIndex: 1,
      // }}
      overflow="hidden"
    >
      {/* Left Section */}
      <Box
        display={{ base: "none", xl: "block" }}
        width={{ base: "0%", lg: "140%" }}
        bgImage={{ base: "none", lg: `url(${DesktopImage.src})` }}
        bgSize="cover"
        bgPosition="center"
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "shadow.1",
          zIndex: 1,
        }}
        p={4}
        color="white"
        borderRight="8px solid"
        borderRightColor="blackAlpha.400"
      >
        <Box className="p-6" position="relative" zIndex={2}>
          <SlideFade
            in={true}
            offsetY="40px"
            transition={{ enter: { duration: 0.5 } }}
          >
            <Heading as="h1">
              <AnnouncementType textContent="WEDDING ANNOUNCEMENT" />
            </Heading>
          </SlideFade>
          <NameText girlsName="Tiffany" boysName="Jared" />
          <SlideFade
            in={true}
            offsetY="40px"
            transition={{ enter: { duration: 0.5 } }}
          >
            <QuotesText
              quotes="Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."
              author="Sapardi Djoko Damono"
            />
          </SlideFade>
        </Box>
      </Box>

      <Box position="absolute" bottom={0} left={5} zIndex={3} mb={4}>
        <Button
        position="relative"
          size="sm"
          bgColor="rgb(153, 122, 94)"
          border="none"
          rounded="full"
          className={newsreader.className}
          zIndex={3}
          fontStyle="italic"
          variant="outline"
          onClick={handleResumeandPauseMusic}
        >
          {isPlaying ? <MdMusicNote /> : <MdMusicOff />}
        </Button>
      </Box>

      {/* Right Section */}
      <Box
        display="flex"
        height="100vh"
        width={{ base: "100%", md: "75%", lg: "80%", xl: "80%" }}
        maxW={{ base: "100%", md: "60%", lg: "50%", xl: "100%" }}
        bgColor="white"
        bgImage={backgroundImage}
        bgSize="cover"
        bgPosition="center"
        position="relative"
        justifyContent="center"
        alignItems="start"
        mx="auto"
        overflow="auto"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: afterBg,
          zIndex: 1,
        }}
      >
        {currentSection === 0 ? (
          <Box
            className="p-6"
            position="relative"
            zIndex={2}
            justifyContent="start"
            textAlign="center"
            color="white"
          >
            <Heading py={20}>
              <AnnouncementType textContent="WEDDING ANNOUNCEMENT" />
            </Heading>
            <NameRightSection
              girlsName="Tiffany"
              boysName="Jared"
              hashtag="#TImetoshaRE"
            />
            <Button
              size="xs"
              marginTop={16}
              width={24}
              bgColor="#ffffff"
              rounded="none"
              className={newsreader.className}
              fontStyle="italic"
              variant="outline"
              onClick={handleNextSection}
              animation={`${slideUpandDown} 10s infinite`}
            >
              Open
            </Button>
          </Box>
        ) : (
          <SlideFade
            in={true}
            offsetY="40px"
            transition={{ enter: { duration: 2 } }}
          >
            <RightSection />
          </SlideFade>
        )}
      </Box>
    </Flex>
  );
};

export default SplitView;
