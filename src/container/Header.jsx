import styled from '@emotion/styled';
import { SubHeading } from '../components';
import { SectionWrapper, InfoWrapper, ImgWrapper } from './styles';

const HeaderWrapper = styled.div`
  background-color: var(--color-black);
`;

const H1 = styled.h1`
  color: var(--color-golden);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 5rem;
  @media screen and (min-width: 2000px) {
    font-size: 8rem;
  }
  @media screen and (max-width: 1150px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;

const Header = () => (
  <HeaderWrapper id="home">
    <SectionWrapper>
      <InfoWrapper>
        <SubHeading title={'Encouraging Text'} />
        <H1>A simple introduction statement</H1>
        <p style={{ color: 'white', fontFamily: 'var(--font-alt)' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          ornare nibh. Suspendisse dignissim id justo quis interdum. Phasellus
          ut tellus porta, feugiat mi eu, ullamcorper massa. Nullam dignissim
          tempus nisi, vel bibendum justo tristique quis. Etiam nec ligula non
          neque varius cursus ac a nunc. Fusce laoreet egestas enim,{' '}
        </p>
      </InfoWrapper>

      <ImgWrapper>
        <img src="/assets/guitar-keanu.webp" alt="header img" />
      </ImgWrapper>
    </SectionWrapper>
  </HeaderWrapper>
);

export default Header;
