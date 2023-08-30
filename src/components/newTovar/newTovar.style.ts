import { Field } from "formik";
import styled from "styled-components";
interface FormLabelProps {
  error?: boolean
}

const colors = {
mainBg: '#222',

textGrey: '#dcdcdc',
subGrey: '#686868',

black: '#262626',
subBlack: '#5a5a5a',

  yellow: '#ffd058',

white: '#fff'
};

export const FormLabel = styled.label<FormLabelProps>`
  display: grid;
  grid-template-columns: .4fr 2fr;

  row-gap: 8px;
  column-gap: 24px;
  padding: 5px 10px 10px; 

  margin-bottom: 10px;
  position: relative;
  
  ${props => props.error && `border: 1px solid red;
  border-radius: 7px;`}
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
type InputPhotoType = {
  value?: Array<object> | null,
}
export const InputFileStyled = styled.input<InputPhotoType>`
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

  position: relative;

  padding: 15px 20px;
  cursor: pointer;

  border-radius: 5px;
  border: 1px solid #DADADA;
  background: #F9FAFB;

  min-height: 36px;
  padding: 10px 11px;

  margin-bottom: 46px;
`;

export const ErrorBox = styled.div`
  position: absolute;
  left: 10px;
  top: 30px;

  /* transform: translateY(-30%); */
  color: red;
`;

export const SelectType = styled.option`
  background-color: pink;
`;

export const TypesSelect = styled.select`
  border: 1px solid #DADADA;
  padding: 8px;
`;

export const Gallery = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px;
background-color: ${colors.textGrey};

padding: 10px;

border-radius: 10px;


`;

export const GalleryItem = styled.li`
width: calc((100% - 20px) / 3);
height: 350px;

border-radius: 10px;

cursor: grab;

`;

export const ImgCard = styled.img`
	height: 100%;
	width: 100%;

	object-fit: contain;
	background-color: ${colors.white};
	border-radius: 10px;
`;

