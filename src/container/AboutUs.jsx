import styled from '@emotion/styled';
import { SubHeading } from '../components';
import { SectionWrapper, H1, P } from './styles';

const AboutUsWrapper = styled.div`
  background-color: var(--color-black);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContentAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: right;
`;

const GuitarDivider = styled.div`
  margin: 2rem 2rem;
  img {
    height: 600px;
  }
  @media screen and (max-width: 1150px) {
    img {
      height: 300px;
    }
  }
`;

const ContentHistory = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  inset: 0;
  z-index: 0;
`;

const AboutUs = () => (
  <AboutUsWrapper id="about">
    <SectionWrapper>
      <Overlay>
        <H1>[Logo]</H1>
      </Overlay>

      <Content>
        <ContentAbout>
          <H1>About Us</H1>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et
          </P>
        </ContentAbout>

        <GuitarDivider>
          <img src="/assets/strat.png" alt="guitar-divider" />
        </GuitarDivider>

        <ContentHistory>
          <H1>Our Teaching</H1>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et
          </P>
        </ContentHistory>
      </Content>
    </SectionWrapper>
  </AboutUsWrapper>
);

export default AboutUs;
