import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    Collapse,
    StatDownArrow,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isDropdownOpen, setDropdownOpen] = useState(false);


    useEffect(() => {
        gsap.set(dropdownRef.current, { height: 0, opacity: 0 });
    }, []);

    const showDropdown = () => {
        gsap.to(dropdownRef.current, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' });
    };

    const hideDropdown = () => {
        const id = setTimeout(() => {
            gsap.to(dropdownRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
        }, 100); // 100ms delay
        setTimeoutId(id);
    };

    const cancelHideDropdown = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    

    return (
        <div className="w-full bg-[#01497B]">
            <div className="w-full bg-[#012945] flex justify-end pr-2">
                <div className="flex gap-3 sm:hidden">
                    <img loading="lazy" src="/Home/topNav.svg" alt="" />
                    <p className="font-inter text-white m-auto">
                        IAYP (International Award Of Young People) as a trained activity provider in India.
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center w-full px-5 py-3">
                <div className="w-[40%] cursor-pointer" onClick={() => navigate('/')}>
                    <img loading="lazy" src="/Home/logo.svg" alt="" className="m-5 ml-10" />
                </div>

                {/* Desktop Menu */}
                <div className="sm:hidden flex w-[60%] items-center mx-5">
                    <div className="w-[70%] flex gap-10">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'nav-link-active' : 'nav-link'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                                isActive ? 'nav-link-active' : 'nav-link'
                            }
                        >
                            About
                        </NavLink>
                        <div className="relative mt-2.5 z-10" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                            <NavLink
                                to="#"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link' : 'nav-link'
                                }
                            >
                                Camps
                            </NavLink>
                            <div
                                onMouseEnter={cancelHideDropdown}
                                onMouseLeave={hideDropdown}
                                ref={dropdownRef}
                                className="absolute z-100 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
                            >
                                <div className="py-1 group-hover:block hover:block">
                                    <NavLink to="/camps/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Leadership Camps
                                    </NavLink>
                                    <NavLink to="/camps/student-outbound" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Student Outbound Camp
                                    </NavLink>
                                    <NavLink to="/camps/inschool" className="z-100 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Inschool Camps
                                    </NavLink>
                                    <NavLink to="/camp/captain-khoj" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Captain Khoj
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <NavLink
                            to="/national-trips"
                            className={({ isActive }) =>
                                isActive ? 'nav-link-active' : 'nav-link'
                            }
                        >
                            National Trips
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                isActive ? 'nav-link-active' : 'nav-link'
                            }
                        >
                            Gallery
                        </NavLink>
                    </div>
                    <div className="w-[30%]">
                        <Button text={'Contact Us'} onClick={'contact-us'} />
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="hidden sm:flex items-center">
                    <IconButton
                        icon={<HamburgerIcon color={'white'} fontWeight={'bold'} fontSize={'25px'}/>}
                        onClick={onOpen}
                        variant="outline"
                        aria-label="Open Menu"
                    />
                </div>
            </div>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg={'#01497B'}>
                        <DrawerCloseButton color={'#fff'}/>
                        <DrawerHeader>
                            <img loading="lazy" src="/Home/logo.svg" alt="Logo" className="mx-auto my-3" />
                        </DrawerHeader>

                        <DrawerBody color={'#fff'}>
                            <NavLink
                                to="/"
                                onClick={onClose}
                                className="block px-4 py-2 text-lg"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about-us"
                                onClick={onClose}
                                className="block px-4 py-2 text-lg"
                            >
                                About
                            </NavLink>
                            <div className="relative">
    <NavLink
        to="#"
        onClick={toggleDropdown}
        className="block px-4 py-2 text-lg"
    >
        Camps <StatDownArrow color={'white'}/>
    </NavLink>
    <Collapse in={isDropdownOpen} animateOpacity>
        <div className="ml-4">
            <NavLink to="/camps/leadership" onClick={onClose} className="block px-4 py-2 text-sm">
                Leadership Camps
            </NavLink>
            <NavLink to="/camps/student-outbound" onClick={onClose} className="block px-4 py-2 text-sm">
                Student Outbound Camp
            </NavLink>
            <NavLink to="/camps/inschool" onClick={onClose} className="block px-4 py-2 text-sm">
                Inschool Camps
            </NavLink>
            <NavLink to="/camp/captain-khoj" onClick={onClose} className="block px-4 py-2 text-sm">
                Captain Khoj
            </NavLink>
        </div>
    </Collapse>
</div>

                            <NavLink
                                to="/national-trips"
                                onClick={onClose}
                                className="block px-4 py-2 text-lg"
                            >
                                National Trips
                            </NavLink>
                            <NavLink
                                to="/gallery"
                                onClick={onClose}
                                className="block px-4 py-2 text-lg"
                            >
                                Gallery
                            </NavLink>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button text={'Contact Us'} onClick={'contact-us'} />
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </div>
    );
};

export { Navbar };
