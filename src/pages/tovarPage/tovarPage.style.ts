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

	@media screen and (min-width: 768px) {
		width: 768px;
		margin: auto;
	}
	@media screen and (min-width: 1440px) {
		width: 1340px;
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

	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
	}
	@media screen and (min-width: 1440px) {
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

	@media screen and (min-width: 768px) {
		grid-column-start: 3;
	}
	@media screen and (min-width: 1440px) {
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

	@media screen and (min-width: 768px) {
		display: ${props => (props.h ? 'none' : 'flex')};
		justify-content: center;
		align-items: center;

		margin-block: auto;
		font-size: 32px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 42px;
		height: 70%;
		font-weight: 700;
	}
`;

export const FormBox = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	flex-direction: column;

	align-items: end;
	justify-content: flex-end;

	width: 100%;

	gap: 10px;
	margin-top: 20px;

	@media screen and (min-width: 768px) {
		display: flex;
	}
	@media screen and (min-width: 1440px) {
		display: grid;

		font-size: 24px;
	}
`;

export const Price = styled.p`
	grid-column-start: 1;

	font-size: 18px;
	font-weight: 400;
	font-style: italic;

	margin: auto auto;
	margin-left: 0;

	@media screen and (min-width: 768px) {
		font-size: 21px;
		margin-right: 0;
		margin-left: auto;
	}
	@media screen and (min-width: 1440px) {
		margin: auto auto;
		margin-left: 0;
		font-size: 24px;
	}
`;

export const CustomInput = styled.div`
	grid-column-start: 2;

	display: flex;
	margin-left: auto;
	height: 44px;
	width: 70px;

	justify-content: center;
	align-items: center;

	position: relative;

	color: ${colors.textGrey};
	font-weight: 900;

	gap: 5px;
`;

export const ButtonNav = styled.div`
	display: flex;
	flex-direction: column-reverse;
	gap: 2px;
`;

export const ButtonValue = styled.button`
	height: 20px;
	width: 20px;

	font-size: 15px;
	text-align: center;
	text-justify: center;

	color: ${colors.yellow};
	background-color: ${colors.subGrey};

	cursor: pointer;

	&:hover,
	&:focus {
	}
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

	grid-column-start: 1;
	grid-column-end: 3;

	padding-block: 8px;
	border-radius: 8px;

	background-color: ${colors.yellow};
	color: ${colors.subBlack};

	@media screen and (min-width: 768px) {
		padding-block: 10px;
	}
	@media screen and (min-width: 1440px) {
		width: 100%;

		padding-block: 13px;
		border-radius: 10px;
	}
`;

export const InfoBox = styled.div`
	@media screen and (min-width: 768px) {
	}
	@media screen and (min-width: 1440px) {
	}
`;

export const Gallery = styled.div`
	width: 100%;

	@media screen and (min-width: 768px) {
		grid-column-start: 1;
		grid-column-end: 3;
	}
`;
export const ImgBox = styled.div`
	width: 100%;
	height: 300px;
	position: relative;

	@media screen and (min-width: 768px) {
		height: 400px;
	}
	@media screen and (min-width: 1440px) {
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

	@media screen and (min-width: 768px) {
		grid-column-start: 1;
		grid-column-end: 4;
	}
`;

export const SubInfoItem = styled.div`
	background-color: ${colors.mainBg} !important;
`;

export const MiniGallery = styled.ul`
	display: flex;
	gap: 10px;

	margin-top: 10px;
	width: 100%;

	@media screen and (min-width: 768px) {
		gap: 15px;
		margin-top: 15px;
	}
	@media screen and (min-width: 1440px) {
		gap: 20px;
		margin-top: 20px;
	}
`;
type MiniGalleryItemProps = {
	isActive?: boolean;
};
export const MiniGalleryItem = styled.li<MiniGalleryItemProps>`
	height: 60px;
	min-width: 60px;
	max-width: 60px;

	@media screen and (min-width: 768px) {
		height: 70px;
		min-width: 70px;
		max-width: 70px;
	}
	@media screen and (min-width: 1440px) {
		height: 80px;
		min-width: 80px;
		max-width: 80px;
	}

	opacity: ${props => (props.isActive ? '1' : '0.5')};
	border: ${props => (props.isActive ? `1px solid ${colors.yellow}` : 'none')};

	transition: ease 2600ms opacity, ease 600ms border;

	&:hover,
	&:focus {
		opacity: 1;
		border: 1px solid ${colors.yellow};

		transition: ease 600ms opacity, ease 600ms border;
	}
`;

export const BtnImg = styled.button`
	height: 100%;
	width: 100%;
`;

export const MiniImg = styled.img`
	height: 100%;
	width: 100%;

	object-fit: cover;

	border: 0px solid ${colors.subGrey};
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

	height: 100%;
	width: auto;

	left: ${props => (props.position ? 0 : '100%')};
	transform: translate(${props => (props.position ? 0 : '-100%')}, -50%);

	color: ${colors.textGrey};

	&:hover {
		color: ${colors.yellow};

		& > svg {
			scale: 1.3;
		}
	}
`;
