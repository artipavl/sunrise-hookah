import styled from 'styled-components';
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';

const colors = {
	mainBg: '#222',

	textGrey: '#dcdcdc',
	subGrey: '#686868',

	black: '#262626',

	yellow: '#ffd058',
};

export const SectionTovar = styled(Section)`
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	display: block;
	padding-top: 0;
`;

export const ContainerTovar = styled(Container)`
	display: flex;
	align-items: center;
	flex-direction: column;

	width: 100%;
	height: auto;

	padding: 20px;
	gap: 30px;

	background-color: ${colors.mainBg};

	@media screen and (min-width: 720px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const MainInfoBox = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	width: 100%;

	color: ${colors.textGrey};

	@media screen and (min-width: 720px) {
		grid-column-start: 3;

		height: 100%;
	}
`;

export const H1 = styled.h1`
	font-size: 2rem;
	font-style: oblique;

	@media screen and (min-width: 720px) {
		font-size: 3rem;
	}
`;

export const Price = styled.p`
	font-weight: 500;
	font-style: italic;

	@media screen and (min-width: 720px) {
		font-size: 24px;
	}
	@media screen and (min-width: 1280px) {
		font-size: 28px;
	}
`;

export const ButtonCase = styled.button`
	background-color: ${colors.yellow};
	padding-block: 8px;
	border-radius: 8px;
	width: 100%;

	@media screen and (min-width: 720px) {
		padding-block: 11px;
	}
	@media screen and (min-width: 1280px) {
		padding: 8px 28px;
		border-radius: 10px;
	}
`;

export const InfoBox = styled.div`
	@media screen and (min-width: 720px) {
	}
	@media screen and (min-width: 1280px) {
	}
`;

export const FormBox = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	gap: 10px;
	justify-content: flex-end;
	align-items: end;
	width: 100%;
`;

export const InputQuantity = styled.input`
	width: 100px;
`;

export const Gallery = styled.div`
	width: 100%;

	@media screen and (min-width: 720px) {
		grid-column-start: 1;
		grid-column-end: 3;
	}
`;
export const ImgBox = styled.div`
	width: 100%;
	height: 300px;
	position: relative;

	@media screen and (min-width: 720px) {
		height: 400px;
	}
	@media screen and (min-width: 1280px) {
		height: 600px;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;

	object-fit: contain;
`;

export const SubinfoBox = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: flex-start;

	gap: 10px;
	width: 100%;

	@media screen and (min-width: 720px) {
		grid-column-start: 1;
		grid-column-end: 4;
	}
`;

export const MiniGallery = styled.ul`
	display: flex;

	gap: 10px;
	margin-top: 10px;

	@media screen and (min-width: 720px) {
		gap: 15px;
		margin-top: 15px;
	}
	@media screen and (min-width: 1280px) {
		gap: 20px;
		margin-top: 20px;
	}
`;

export const MiniGalleryItem = styled.li`
	height: 50px;
	width: 50px;

	@media screen and (min-width: 720px) {
		height: 70px;
		width: 70px;
	}
	@media screen and (min-width: 1280px) {
		height: 100px;
		width: 100px;
	}
`;

export const BtnImg = styled.button`
	height: 100%;
	width: 100%;
`;

export const MiniImg = styled.img`
	height: 100%;
	width: 100%;

	border: 0px solid ${colors.subGrey};

	opacity: 0.5;
	object-fit: cover;

	transition: ease 600ms opacity, ease 600ms border;

	&:hover,
	&:focus {
		opacity: 1;
		border: 1px solid red;

		transition: ease 600ms opacity, ease 600ms border;
	}
`;

interface BtnArrowProps {
	position: Boolean;
}

export const BtnArrow = styled.button<BtnArrowProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: 50%;

	height: 50px;
	width: 30px;

	border-radius: 3px;

	left: ${props => (props.position ? 0 : '100%')};
	transform: translate(${props => (props.position ? 0 : '-100%')}, -50%);

	color: ${colors.textGrey};

	&:hover,
	&:focus {
		background-color: ${colors.subGrey};
	}

	@media screen and (min-width: 720px) {
		height: 70px;
		width: 70px;
	}
	@media screen and (min-width: 1280px) {
		height: 90px;
		width: 90px;
	}
`;
