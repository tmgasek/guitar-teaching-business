import styled from '@emotion/styled';
import { SubHeading } from '../components';
import { SectionWrapper, InfoWrapper, ImgWrapper, H1, P } from './styles';

const HeaderWrapper = styled.div`
  background-color: var(--color-black);
`;

const Header = () => (
  <HeaderWrapper id="home">
    <SectionWrapper>
      <InfoWrapper>
        <SubHeading title={'Encouraging Text'} />
        <H1>A simple introduction statement</H1>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          ornare nibh. Suspendisse dignissim id justo quis interdum. Phasellus
          ut tellus porta, feugiat mi eu, ullamcorper massa. Nullam dignissim
          tempus nisi, vel bibendum justo tristique quis. Etiam nec ligula non
          neque varius cursus ac a nunc. Fusce laoreet egestas enim,{' '}
        </P>
      </InfoWrapper>

      <ImgWrapper>
        <img src="/assets/guitar-keanu.webp" alt="header img" />
      </ImgWrapper>
    </SectionWrapper>
  </HeaderWrapper>
);

export default Header;
