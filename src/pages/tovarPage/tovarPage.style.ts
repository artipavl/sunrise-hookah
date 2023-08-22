import styled from 'styled-components';
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';

const colors = {
	mainBg: '#222',

	textGrey: '#dcdcdc',
	subGrey: '#686868',

	black: '#262626',
	subBlack: '#5a5a5a',

	yellow: '#ffd058',
};

export const SectionTovar = styled(Section)`
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	display: block;
	padding-top: 0;

	@media screen and (min-width: 720px) {
		width: 720px;
		margin: auto;
	}
	@media screen and (min-width: 1280px) {
		width: 900px;
	}
`;

export const ContainerTovar = styled(Container)`
	display: flex;
	align-items: center;
	flex-direction: column;

	width: 100%;
	height: auto;

	padding: 20px;

	gap: 10px;

	background-color: ${colors.mainBg};

	@media screen and (min-width: 720px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
	}
	@media screen and (min-width: 1280px) {
	}
`;

export const MainInfoBox = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	color: ${colors.textGrey};

	@media screen and (min-width: 720px) {
		grid-column-start: 3;
	}
	@media screen and (min-width: 1280px) {
		display: block;
		height: 100%;

		padding-inline: 20px 0;
	}
`;

type H1Props = {
	h?: boolean;
};

export const H1 = styled.h1<H1Props>`
	font-size: 24px;
	/* font-style: oblique; */
	color: ${colors.textGrey};
	${`text-wrap: balance;`};

	display: ${props => (props.h ? 'block' : 'none')};

	@media screen and (min-width: 720px) {
		display: ${props => (props.h ? 'none' : 'flex')};
		justify-content: center;
		align-items: center;

		height: 50%;
		font-size: 32px;
	}
	@media screen and (min-width: 1280px) {
		font-size: 42px;
		height: 70%;
		font-weight: 700;
	}
`;

export const FormBox = styled.form`
	display: flex;
	flex-direction: column;

	align-items: end;
	justify-content: flex-end;

	width: 100%;

	gap: 10px;
	margin-top: 20px;
`;

export const Price = styled.p`
	font-size: 15px;
	font-weight: 400;
	font-style: italic;

	@media screen and (min-width: 720px) {
		font-size: 18px;
	}
	@media screen and (min-width: 1280px) {
		font-size: 24px;
	}
`;

export const CustomInput = styled.div`
	display: flex;
	height: 44px;
	width: 70px;

	justify-content: center;
	align-items: center;

	position: relative;

	color: ${colors.textGrey};
	font-weight: 900;

	gap: 5px;
`;

type ButtonsValueProps = {
	onClick?: Function; 
	r?: boolean;
};

export const ButtonNav = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2px;
`;

export const ButtonValue = styled.button<ButtonsValueProps>`
	height: 20px; 
	width: 20px;

	/* position: absolute; */

	/* top: ${props => props.r ? '100%' : 0};
	
	transform: translateY(${props => props.r ? '-100%' : 0}); */
	/* right: 0; */

	text-align: center;
	text-justify: auto;

	background-color: ${colors.subGrey};

	&:hover,
	&:focus {
	}

	cursor: pointer;
	text-align: center;
	color: #333;
`;

export const InputQuantity = styled.input`
	width: 50px;
	height: 44px;
	background-color: ${colors.subGrey};
	border-color: ${colors.subGrey};

	padding: 3px 10px;
	text-align: center;

	color: ${colors.yellow};

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none; 
	}
`;

export const ButtonCase = styled.button`
	width: 100%;

	padding-block: 8px;
	border-radius: 8px;

	background-color: ${colors.yellow};
	color: ${colors.subBlack};

	@media screen and (min-width: 720px) {
		padding-block: 10px;
	}
	@media screen and (min-width: 1280px) {
		width: 60%;
		padding-block: 13px;
		border-radius: 10px;
	}
`;

export const InfoBox = styled.div`
	@media screen and (min-width: 720px) {
	}
	@media screen and (min-width: 1280px) {
	}
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
		height: 400px;
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
	height: 60px;
	width: 60px;

	@media screen and (min-width: 720px) {
		height: 70px;
		width: 70px;
	}
	@media screen and (min-width: 1280px) {
		height: 80px;
		width: 80px;
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

	height: 45px;
	width: 30px;

	border-radius: 20px;

	left: ${props => (props.position ? 0 : '100%')};
	transform: translate(${props => (props.position ? 0 : '-100%')}, -50%);

	color: ${colors.textGrey};

	&:hover,
	&:focus {
		background-color: ${colors.subGrey};
		border: ${colors.mainBg} solid 1px;
	}

	@media screen and (min-width: 720px) {
		height: 54px;
		width: 35px;
		border-radius: 30px;
	}
	@media screen and (min-width: 1280px) {
		height: 81px;
		width: 50px;
		border-radius: 40px;
	}
`;
