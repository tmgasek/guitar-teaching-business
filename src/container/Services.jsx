import styled from '@emotion/styled';
import { SubHeading } from '../components';
import { SectionWrapper, H1, P } from './styles';
import { guitarLessons, theoryLessons } from '../constants/data';
import ServiceItem from '../components/ServiceItem';

const ServicesWrapper = styled.div`
  background-color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderDiv = styled.div`
  text-align: center;
`;

const AllServices = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const ServiceHeading = styled.div`
  font-family: var(--font-base);
  font-weight: 600;
  font-size: 45px;
  line-height: 58.5px;
  letter-spacing: 0.04em;
  color: var(--color-white);
`;

const ServiceSection = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

const ImageDivider = styled.div`
  width: 210px;
  margin: 0 2rem;
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: 2000px) {
    width: 650px;
    img {
      height: 920px;
    }
  }
`;

const ServiceItems = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem 0;
  width: 100%;
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <SectionWrapper>
        <Container>
          <HeaderDiv>
            <SubHeading title={'Our Services'} />
            <H1>Here's what we offer</H1>
          </HeaderDiv>

          <AllServices>
            <ServiceSection>
              <ServiceHeading>Instrument Lessons</ServiceHeading>
              <ServiceItems>
                {guitarLessons.map((lesson) => (
                  <ServiceItem
                    key={lesson.title}
                    title={lesson.title}
                    price={lesson.price}
                    length={lesson.length}
                  />
                ))}
              </ServiceItems>
            </ServiceSection>

            <ImageDivider>
              <img src="/assets/strat.png" alt="guitar-divider" />
            </ImageDivider>

            <ServiceSection>
              <ServiceHeading>Theory Lessons</ServiceHeading>
              <ServiceItems>
                {theoryLessons.map((lesson) => (
                  <ServiceItem
                    key={lesson.title}
                    title={lesson.title}
                    price={lesson.price}
                    length={lesson.length}
                  />
                ))}
              </ServiceItems>
            </ServiceSection>
          </AllServices>
        </Container>
      </SectionWrapper>
    </ServicesWrapper>
  );
};

export default Services;
