import styled from 'styled-components';
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';

export const SectionTovar = styled(Section)`
  display: block;
  padding-top: 0; 
  color: aqua; 

`;

export const ContainerTovar = styled(Container)`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  background-color: #fff;
  padding: 20px;
  gap: 30px;
  height: auto;
  width: 100%;
`;

export const MainInfoBox = styled.div`
  
`;

export const ButtonCase = styled.button`
  background-color: #FFD700;
  padding: 8px 28px;
  border-radius: 8px;
`;

export const InfoBox = styled.div` 
  max-width: fit-content;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputQuantity = styled.input`
  width: 100px;
`;

export const Gallery = styled.div`
  width: 100%;
`;
export const ImgBox = styled.div`
  width: 100%;
  height: 300px; 
`;

export const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

  background-color: #dcdcdc;
`;

export const SubinfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MiniGallery = styled.ul`
  margin-top: 10px;
  display: flex; 
  gap: 10px;
`;

export const MiniGalleryItem = styled.li`
  height: 60px;
  width: 60px;
`;

export const BtnImg = styled.button`
  height: 100%;
  width: 100%;
`;

export const MiniImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  border: 0px solid #fff;
    
  transition: ease 600ms opacity, ease 600ms border;
  
  &:hover,
  &:focus {
    opacity: 1;
    border: 1px solid red;
    
    transition: ease 600ms opacity, ease 600ms border;
  }
`;