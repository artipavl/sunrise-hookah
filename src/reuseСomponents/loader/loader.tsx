import React, { FC } from 'react';

import { createPortal } from 'react-dom';
import { LoaderBox, LogiImg } from './loader.style';
import Logo from '../../images/logo-320.png';

const portal = document.getElementById('portal') as HTMLElement;

type LoaderProps = {
	opacity?: number;
};

const Loader: FC<LoaderProps> = ({ opacity = 0.5 }) => {
	return createPortal(
		<LoaderBox opacity={opacity}>
			<LogiImg src={Logo} alt="Logo" width="320px" height="320px" />
		</LoaderBox>,
		portal
	);
};

export default Loader;
