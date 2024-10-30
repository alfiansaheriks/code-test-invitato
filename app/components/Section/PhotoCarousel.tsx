import React, { useState } from "react";
import { Box, Image, Flex, HStack, Button } from "@chakra-ui/react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const PhotoCarousel = () => {
  const photos = [
    "/img/Slideshow-Cover-1.jpg",
    "/img/Slideshow-Cover-2.jpg",
    "/img/Slideshow-Cover-3.jpg",
    "/img/Slideshow-Cover-4.jpg",
    "/img/Slideshow-Cover-5.jpg",
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const photosPerPage = 3;
  const highlightedIndex = 1;

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + photos.length) % photos.length
    );
  };

  const getCurrentPhotos = () => {
    const startIndex = currentPage;
    const endIndex = (startIndex + photosPerPage) % photos.length;
    if (endIndex > startIndex) {
      return photos.slice(startIndex, endIndex);
    } else {
      return [...photos.slice(startIndex), ...photos.slice(0, endIndex)];
    }
  };

  const currentPhotos = getCurrentPhotos();

  return (
    <Flex align="center" justify="center" direction="column">
      <HStack spacing={8} width="150%">
        {currentPhotos.map((photo, index) => (
          <Box
            key={index}
            overflow="hidden"
            transform={highlightedIndex === index ? "scale(1.1)" : "scale(1)"}
            transition="transform 0.5s ease-in-out, opacity 0.5s ease-in-out"
            opacity={highlightedIndex === index ? 1 : 0.8}
            _hover={{ boxShadow: "md" }}
          >
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              boxSize="xs"
              objectFit="cover"
            />
          </Box>
        ))}
      </HStack>
      <Box
        display="flex"
        justifyContent="end"
        alignItems="center"
        mt="50px"
        width="100%"
      >
        <Button
          width="15%"
          border="1px"
          onClick={handlePrev}
          mr={2}
          rounded="none"
          bgColor="#ffffff"
        >
          <GrLinkPrevious />
        </Button>
        <Button
          width="15%"
          border="1px"
          onClick={handleNext}
          rounded="none"
          bgColor="#ffffff"
        >
          <GrLinkNext />
        </Button>
      </Box>
    </Flex>
  );
};

export default PhotoCarousel;
