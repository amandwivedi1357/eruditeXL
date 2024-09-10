import { useState } from "react";
import { Button, Tab, TabList, TabPanel, TabPanels, Tabs, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalBody, IconButton } from "@chakra-ui/react";
import { galleryTabs } from "../../utils/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useBreakpointValue } from "@chakra-ui/react"; // For responsive logic

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMobile = useBreakpointValue({ base: true, md: false }); // Check if the screen is mobile or not

  const openModal = (tabIndex, imageIndex) => {
    setCurrentTab(tabIndex);
    setCurrentImageIndex(imageIndex);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : galleryTabs[currentTab].img.length - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev < galleryTabs[currentTab].img.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full">
      <div className="m-[40px]">
        <p className="my-[20px] font-bold font-inter text-[30px]">Gallery</p>
        
        {isMobile ? (
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
                  <div className="grid grid-cols-2 gap-4">
                    {data.img.map((image, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="p-2 relative cursor-pointer"
                        onClick={() => openModal(idx, imgIdx)}
                      >
                        <img loading="lazy"
                          src={image}
                          alt={`Gallery ${data.head} ${imgIdx}`}
                          className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110 hover:z-10"
                        />
                      </div>
                    ))}
                  </div>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              {galleryTabs.map((data, idx) => (
                <Tab key={idx}>
                  <p>{data.head}</p>
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {galleryTabs.map((data, idx) => (
                <TabPanel key={idx}>
                  <div className="grid grid-cols-4 gap-4">
                    {data.img.map((image, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="p-2 relative cursor-pointer"
                        onClick={() => openModal(idx, imgIdx)}
                      >
                        <img loading="lazy"
                          src={image}
                          alt={`Gallery ${data.head} ${imgIdx}`}
                          className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110 hover:z-10"
                        />
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        )}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} size="full" isCentered>
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
              aria-label="Previous"
              className="absolute left-4 top-1/2 transform z-20 text-white"
            />
            <img loading="lazy" src={galleryTabs[currentTab].img[currentImageIndex]} alt="Selected" className="max-h-screen" />
            <IconButton
              icon={<FaArrowRight />}
              onClick={nextImage}
              aria-label="Next"
              bgColor={'blue'}
              color={'white'}
              _hover={{
                bg:'yellow',
                color:'black'
              }}
              className="absolute right-4 top-[60%] transform z-20 text-white"
            />
          </ModalBody>
          <Button bg={'yellow'} _hover={{bg:"blue",color:'white'}}  mt={4} onClick={closeModal} className="absolute bottom-4 w-[80%] m-auto">
                Close
          </Button>
        </ModalContent>
      </Modal>
    </div>
  );
};

export { GalleryPage };
