import styled from '@emotion/styled';

const ServiceItem = ({ title, price, length }) => {
  const Item = styled.div`
    width: 100%;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
  `;

  return <Item></Item>;
};

export default ServiceItem;
