import { Box, Button, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AnnouncementType from "../Section/AnnouncementType";
import NameRightSection from "../Section/NameRightSection";
import { Newsreader, Poppins } from "next/font/google";
import GreetingText from "../Section/GreetingText";
import PhotoCarousel from "../Section/PhotoCarousel";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { keyframes } from "@emotion/react";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const zoomInBg = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const crossfade = keyframes`
    0% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
  100% {
    opacity: 1;
  }
    `;

const combinedAnimation = `${zoomInBg} 15s ease, ${crossfade} 1s ease-in-out`;

const RightSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideShowImages = [
    "/img/Slideshow-Cover-1.jpg",
    "/img/Slideshow-Cover-2.jpg",
    "/img/Slideshow-Cover-3.jpg",
    "/img/Slideshow-Cover-4.jpg",
    "/img/Slideshow-Cover-5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % slideShowImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [slideShowImages.length]);

  const handleScrolltoWelcome = () => {
    document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Flex direction="column" height="100vh" position="relative" overflowX="hidden">
      <Box
        key={currentImageIndex}
        width="100%"
        height="100vh"
        position="absolute"
        top={0}
        left={0}
        bgImage={`url(${slideShowImages[currentImageIndex]})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        animation={combinedAnimation}
        zIndex={1}
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
      />

      <Box
        width="100%"
        height="100vh"
        p={6}
        position="relative"
        zIndex={2}
        textAlign="center"
        color="white"
      >
        <Box height="100vh" overflowX="hidden" overflowY="auto" padding="1rem" position="relative">
          <Heading py={20}>
            <AnnouncementType textContent="WEDDING ANNOUNCEMENT" />
          </Heading>
          <NameRightSection
            girlsName="Tiffany"
            boysName="Jared"
            hashtag="#TImetoshaRE"
          />
          <Link
            display="flex"
            className={poppins.className}
            href="#"
            onClick={handleScrolltoWelcome}
            color="white"
            fontSize="md"
            position="absolute"
            bottom={10}
            right={0}
            zIndex={3}
            mb={4}
            textTransform="uppercase"
            flexDirection="row"
            style={{ textDecoration: "none" }}
          >
            Scroll to Begin{" "}
            <Icon as={MdOutlineKeyboardArrowDown} fontSize="2xl" />
          </Link>
        </Box>
      </Box>

      <Box
        id="welcome"
        width="100%"
        height="100vh"
        className="p-6"
        position="relative"
        zIndex={2}
        justifyContent="start"
        textAlign="center"
        color="white"
        bgColor={"#ffffff"}
      >
        <Heading>
          <GreetingText
            greetingsText="DEAR MR-MRS-MS"
            invitedText="Family & Friends"
            welcomeText="Welcome to Tiffany & Jared's Wedding Website"
            wordsOfWisdom="Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage."
          />
        </Heading>
        <PhotoCarousel />
      </Box>
    </Flex>
  );
};

export default RightSection;
