import styled from 'styled-components';

type SectionProps = {
	bgc?: string;
	h?: boolean;
};

export const Section = styled.section<SectionProps>`
	scroll-snap-align: start;
	width: 100%;
	/* min-height: 100vh; */

	display: grid;
	/* ${props => !props.h && `max-height: 100vh;`} */

	background-color: ${props => props.bgc};

	/* padding-top: 80px;
  padding-bottom: 100px; */

	padding-block: 40px;

	@media screen and (min-width: 1440px) {
		/* padding-top: 80px;
    padding-bottom: 100px; */
		padding-block: 60px;
	}
`;
