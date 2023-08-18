import styled from 'styled-components'; 
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';

export const SectionTovar = styled(Section)`
  display: block;
  padding-top: 0; 
`;

export const ContainerTovar = styled(Container)`
  display: flex;
  /* justify-content: center; */
  align-items: center;

  background-color: #fff;
  padding: 20px;
  gap: 30px;
  height: auto;
`;

export const MainInfoBox = styled.div`
  
`;

export const ButtonCase = styled.button`
  background-color: #FFD700;
  padding: 8px 28px;
  border-radius: 8px;
`;

export const InfoBox = styled.div` 
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputQuantity = styled.input`
  width: 100px;
`;

export const Gallery = styled.div`
  
`;
export const ImgBox = styled.div`
  width: 400px;
  height: 500px;
  object-fit: scale-down;
`;

export const Img = styled.img`
  object-fit: none;
  width: 100%;
  height: 100%;

  background-color: #dcdcdc;
`;

export const SubinfoBox = styled.div`
  
`;

export const MiniGallery = styled.ul`
  margin-top: 10px;
  display: flex; 
  gap: 10px;
`;

export const MiniGalleryItem = styled.li`
  width: 100px;
  height: 100px;
`;

export const BtnImg = styled.button`
  height: 100%;
  width: 100%;
`;

export const MiniImg = styled.img`
  width: 100%;
  object-fit: cover;
`;