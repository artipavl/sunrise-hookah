import { Field } from "formik";
import styled from "styled-components";

export const FormLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  gap: 20px;
  padding: 5px 10px 10px;
  border-radius: 7px;
  border: 1px solid #CECECE;

  background-color: #F0F0F0 ;

  margin-bottom: 10px;
`;

export const Signature = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;

  text-decoration: wavy;
`;

export const DescrMark = styled.ul`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  padding-inline: 30px;
`;

export const DescrMarkItem = styled.li`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 200;
  font-size: 22px;
  color: blueviolet;
`;

export const InputText = styled(Field)`
  &:hover, :focus, :active, :focus-visible {
    border-color: #CECECE;
  } 
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
  border-radius: 7px;

  border: 1px solid #CECECE;
  background-color: #F0F0F0 ;
  `;

export const ButtonSubmit = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  padding: 7px 30px 7px;
  background-color: #E7E5E4;
  margin: auto;
`;