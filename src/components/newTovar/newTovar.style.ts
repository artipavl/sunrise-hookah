import styled from "styled-components";

export const FormLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  gap: 20px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid black;
`;

export const Signature = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;

  text-decoration: wavy;
`;