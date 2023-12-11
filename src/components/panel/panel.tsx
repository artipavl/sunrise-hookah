import React, { FC } from 'react';
import {
	Button,
	FormButton,
	FormInput,
	PanelBox,
	SearchPanel,
} from './panel.style';
import { AiOutlinePlusCircle, AiOutlineSearch } from 'react-icons/ai';

type PanelProps = {};

const Panel: FC<PanelProps> = props => {
	return (
		<PanelBox>
			<SearchPanel action="">
				<FormInput type="text" />
				<FormButton type="submit">
					<AiOutlineSearch />
				</FormButton>
			</SearchPanel>

			<Button type="button">
				<AiOutlinePlusCircle height={'36px'} width={'36px'} />
			</Button>
		</PanelBox>
	);
};

export default Panel;
