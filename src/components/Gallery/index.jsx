import { useState, useEffect, useCallback, useMemo } from "react";
import { Button, Tab, TabList, TabPanel, TabPanels, Tabs, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Image } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalBody, IconButton } from "@chakra-ui/react";
import { galleryTabs } from "../../utils/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useBreakpointValue } from "@chakra-ui/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Loader } from "../Loader";

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const isMobile = useBreakpointValue({ base: true, md: false });

  const openModal = useCallback((tabIndex, imageIndex) => {
    setCurrentTab(tabIndex);
    setCurrentImageIndex(imageIndex);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : galleryTabs[currentTab].img.length - 1));
  }, [currentTab]);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev < galleryTabs[currentTab].img.length - 1 ? prev + 1 : 0));
  }, [currentTab]);

  const handleKeyDown = useCallback((event) => {
    if (isOpen) {
      if (event.key === 'ArrowLeft') prevImage();
      else if (event.key === 'ArrowRight') nextImage();
      else if (event.key === 'Escape') closeModal();
    }
  }, [isOpen, prevImage, nextImage, closeModal]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleImageLoad = useCallback((tabIndex, imageIndex) => {
    setLoadedImages(prev => ({
      ...prev,
      [tabIndex]: {
        ...prev[tabIndex],
        [imageIndex]: true
      }
    }));
  }, []);

  const isTabFullyLoaded = useCallback((tabIndex) => {
    const tabImages = loadedImages[tabIndex] || {};
    return Object.keys(tabImages).length === galleryTabs[tabIndex].img.length;
  }, [loadedImages]);

  const renderImage = useCallback(({ image, index, tabIndex }) => (
    <div
      key={index}
      className="p-2 relative cursor-pointer overflow-hidden"
      onClick={() => openModal(tabIndex, index)}
    >
      <LazyLoadImage
        src={image}
        alt={`Gallery image ${index + 1}`}
        // effect="blur"
        className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-110 hover:z-10"
         wrapperClassName="w-full h-full"
        onLoad={() => handleImageLoad(tabIndex, index)}
      />
    </div>
  ), [openModal, handleImageLoad]);

  const memoizedTabPanels = useMemo(() => (
    galleryTabs.map((data, idx) => (
      <TabPanel key={idx}>
        {!isTabFullyLoaded(idx) && (
          <div className="w-full flex justify-center items-center">

            <Loader />
          </div>
          )}
        <div className="grid grid-cols-3 gap-4">
          {data.img.map((image, imgIdx) => renderImage({ image, index: imgIdx, tabIndex: idx }))}
        </div>
      </TabPanel>
    ))
  ), [renderImage, isTabFullyLoaded]);

  const memoizedAccordion = useMemo(() => (
    <Accordion allowToggle>
      {galleryTabs.map((data, idx) => (
        <AccordionItem key={idx}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {data.head}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {!isTabFullyLoaded(idx) && <Loader />}
            <div className="grid grid-cols-2 gap-4">
              {data.img.map((image, imgIdx) => renderImage({ image, index: imgIdx, tabIndex: idx }))}
            </div>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  ), [renderImage, isTabFullyLoaded]);

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto sm:w-[95%]">
        <div className="my-5">
          <p className="font-bold text-[40px] sm:text-[24px]">Gallery</p>
        </div>
        
        {!isMobile ? (
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              {galleryTabs.map((data, idx) => (
                <Tab key={idx}>
                  <p>{data.head}</p>
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {memoizedTabPanels}
            </TabPanels>
          </Tabs>
        ) : memoizedAccordion}
        
      <Modal isOpen={isOpen} onClose={closeModal} size="full" isCentered>
        <ModalOverlay />
        <ModalContent className="bg-transparent shadow-none">
          <ModalBody className="flex justify-center items-center relative">
            <IconButton
              icon={<FaArrowLeft />}
              onClick={prevImage}
              bgColor={'blue'}
              color={'white'}
              _hover={{
                bg:'yellow',
                color:'black'
              }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
            />
            <img 
              src={galleryTabs[currentTab].img[currentImageIndex]} 
              alt={`Selected image ${currentImageIndex + 1} in ${galleryTabs[currentTab].head}`} 
              className="h-[35rem]"
            />
            <IconButton
              icon={<FaArrowRight />}
              onClick={nextImage}
              aria-label="Next image"
              bgColor={'blue'}
              color={'white'}
              _hover={{
                bg:'yellow',
                color:'black'
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
            />
          </ModalBody>
          <Button 
            bg={'yellow'} 
            _hover={{bg:"blue",color:'white'}} 
            mt={4} 
            onClick={closeModal} 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%]"
          >
            Close
          </Button>
        </ModalContent>
      </Modal>
      </div>
    </div>
  );
};

export { GalleryPage };
