import React, { FC } from 'react';
import { AdminLink, Footerbox } from './footet.style';

type FooterProps = {};

const Footer: FC<FooterProps> = props => {
	return (
		<Footerbox>
			© 2023 SUNRISE HOOKAH{' '}
			<AdminLink to="/admin">Вхід для адміністратора</AdminLink>
		</Footerbox>
	);
};

export default Footer;
