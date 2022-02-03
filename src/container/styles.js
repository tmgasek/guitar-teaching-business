import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  padding: 4rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
  @media screen and (max-width: 850px) {
    padding: 4rem;
  }
  @media screen and (max-width: 650px) {
    padding: 4rem 2rem;
  }
`;

export const InfoWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  img {
    width: 80%;
  }
  @media screen and (max-width: 1150px) {
    margin: 5rem 0 0 0;
    img {
      width: 100%;
    }
  }
`;
