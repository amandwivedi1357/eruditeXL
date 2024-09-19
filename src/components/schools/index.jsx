import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import { schoolLogos } from '../../utils/data';

const Schools = () => {
  return (
    <MarqueeContainer>
      <p className='text-center font-bold sm:ml-[20px] text-[40px] text-black sm:text-[24px] sm:text-left'>
        The Reputable Institutions We Engage With
      </p>
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {schoolLogos.map((logo, index) => (
          <LogoWrapper key={index}>
            <Logo src={logo.src} alt={`School logo ${index + 1}`} />
          </LogoWrapper>
        ))}
      </Marquee>
    </MarqueeContainer>
  );
};

const MarqueeContainer = styled.div`
  width: 100%;
  padding: 30px 0;

  overflow: hidden;

  @media (max-width: 640px) {
    padding: 15px 0;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px; /* Adjusted height for mobile */
  width: 150px; /* Adjusted width for mobile */
  margin: 0 10px; /* Reduced margin for mobile */
  background-color: white;
  border-radius: 10px;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Logo = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

export { Schools };
