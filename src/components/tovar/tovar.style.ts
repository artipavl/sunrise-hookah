import styled from 'styled-components';

const colors = {
	mainBg: '#222',

	textGrey: '#dcdcdc',
	subGrey: '#686868',

	black: '#262626',
	subBlack: '#5a5a5a',

	yellow: '#ffd058',
};

export const TovarBox = styled.div`
	width: 100%;
	height: 350px;

	:hover,
	:focus {
		& #Upper {
			bottom: 0;
		}
	}

	@media screen and (min-width: 768px) {
		height: 380px;
	}
	@media screen and (min-width: 1440px) {
		height: 440px;
	}
`;

export const TovarImageBox = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TovarImageBoxUpper = styled.div`
  position: absolute;
  width: 100%;
  height: 20%;
  left: 0;
  bottom: -30%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.subGrey};
  color: ${colors.textGrey};

  transition: bottom 225ms linear;
`;

export const TovarInformation = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 100%;
	height: calc(30% - 10px);

	margin-top: 10px;
	color: ${colors.textGrey};

	font-size: 16px;

	@media screen and (min-width: 768px) { 
		font-size: 18px;
	}
	@media screen and (min-width: 1440px) { 
		font-size: 20px;
	}
`;
export const TovarInformationAvailability = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 25px;
	color: ${colors.textGrey};
	background-color: ${colors.subGrey};

	@media screen and (min-width: 768px) {
		height: 30px;
	}
	@media screen and (min-width: 1440px) {
		height: 36px;
	}
`;

export const NameTovar = styled.span`
	color: ${colors.yellow};

	font-size: 18px;

	@media screen and (min-width: 768px) {
		font-size: 20px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 23px;
	}
`;

export const ImgTovar = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;