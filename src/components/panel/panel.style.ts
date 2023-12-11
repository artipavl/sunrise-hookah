import styled from 'styled-components';
import palette from '../../theme.module';

export const PanelBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SearchPanel = styled.form``;

export const FormInput = styled.input`
	line-height: 22px;
	padding: 5px 15px;

	border-radius: 25px;
	border: 2px solid #d1d1d1;
	background: #fff;
`;

export const FormButton = styled.button`
	color: ${palette.accentSecLight};
	position: relative;
	left: -30px;
	top: 2px;
`;

export const Button = styled.button`
	color: ${palette.alert};
`;
