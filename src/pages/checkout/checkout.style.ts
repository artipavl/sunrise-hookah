import styled from 'styled-components';

export const Title = styled.h1`
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 30px;
`;

export const SubTitle = styled.h2`
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 30px;
  font-weight: 400;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
`;

export const CheckoutList = styled.ol`
  counter-reset: a;
  width: 100%;
`;
export const CheckoutItem = styled.li`
  :not(:last-child) {
    margin-bottom: 30px;
  }
  display: flex;

  ::before {
    content: counter(a);
    counter-increment: a;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 5px; */
    margin-right: 10px;
    width: 30px;
    height: 30px;
    background-color: #ffffff50;
    /* color: red; */
    border-radius: 50%;
  }
`;
