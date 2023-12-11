import React, { FC } from 'react';

import { IoLogoInstagram, IoMdPaperPlane } from 'react-icons/io';
import { SocialLinksList, SocialLinkslink } from './socialLinks.style';
import palette from '../../theme.module';

type SocialLinksProps = {};

const SocialLinks: FC<SocialLinksProps> = props => {
	return (
		<SocialLinksList>
			<li>
				<SocialLinkslink
					target="_blank"
					to="https://www.instagram.com/sunrise_hookah1/"
				>
					<IoLogoInstagram size="30px" color={palette.white} />
				</SocialLinkslink>
			</li>
			<li>
				<SocialLinkslink
					target="_blank"
					to="https://www.instagram.com/sunrise_hookah1/"
				>
					<IoMdPaperPlane size="30px" color={palette.white} />
				</SocialLinkslink>
			</li>
		</SocialLinksList>
	);
};

export default SocialLinks;
