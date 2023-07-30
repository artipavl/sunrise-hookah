import { Field } from "formik";
import styled from "styled-components";

export const FormLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 1fr;

  row-gap: 8px;
  column-gap: 24px;
  padding: 5px 10px 10px; 

  margin-bottom: 10px;
`;

export const BoxFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Signature = styled.p`
grid-column-start: 1;
grid-row-start: 1;
grid-row-end: 2;

color: #515050;
font-family: Product Sans;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.2px;

`;

export const SignatureEn = styled.p`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 2;


  color: #515050;
  font-family: Product Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`;

export const InputStyled = styled(Field)`
  border-radius: 5px;
  border: 1px solid #DADADA;
  background: #F9FAFB;

  min-height: 36px;
  padding: 10px 11px;
`;

export const BoxInputNum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FormLabelNum = styled.label`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  gap: 10px;
  padding: 5px 10px 10px; 
  `;

export const ButtonSubmit = styled.button`
  border-radius: 5px;
  padding: 15px 33px;

  background: #1D4ED8;

  color: #FFF;
  font-family: Product Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`;

export const H1 = styled.h1`
  font-weight: 400;
  padding-bottom: 20px;
  margin-bottom: 26px;

  display: flex;
  justify-content: center;
  border-bottom: .5px solid #DADADA;
  margin-inline: -60px;
`;

export const BoxBtn = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 20px;
  padding-right: 70px;

  border-top: .5px solid #DADADA;
  margin-inline: -60px;
`;

export const InputFileStyled = styled(Field)`
  width: 0px;
  height: 0px;
  opacity: 0;
`;

export const FormLabelFile = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 15px 20px;
  cursor: pointer;

  border-radius: 5px;
  border: 1px solid #DADADA;
  background: #F9FAFB;

  min-height: 36px;
  padding: 10px 11px;

  margin-bottom: 46px;
`;