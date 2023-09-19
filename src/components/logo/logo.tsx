import React, { FC } from 'react';

import Logoimg from '../../images/sunrise-hookah.jpg';
import { LogoImg } from './logo.style';
import { Link } from 'react-router-dom';
type LogoProps = {};

const Logo: FC<LogoProps> = props => {
	return (
		<Link to="/" style={{ zIndex: 2 }}>
			<LogoImg src={Logoimg} alt="Logo" width="40px" />
		</Link>
	);
};

export default Logo;
