import React, { FC } from 'react';
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';
import { CiCamera, CiHome, CiLock, CiShuffle } from 'react-icons/ci';
import {
	AboutItem,
	AboutItemText,
	AboutItemTitle,
	AboutTitle,
	Aboutlist,
} from './about.style';
import { useAppSelector } from '../../hooks';
import { selectLanguage } from '../../redux/language/languageSelectors';
import palette from '../../theme.module';

type AboutProps = {};

const About: FC<AboutProps> = props => {
	const language = useAppSelector(selectLanguage);
	return (
		<Section id="about" bgc={palette.bgMain} h={true}>
			<Container flex={'center'}>
				<AboutTitle>
					{language === 'uk' ? 'SUNRISE HOOKAH' : 'SUNRISE HOOKAH is'}
				</AboutTitle>
				<Aboutlist>
					<AboutItem>
						<CiLock color={palette.white} size={'30%'} />
						<AboutItemTitle>
							{language === 'uk'
								? 'Якість та надійність'
								: 'Quality and reliability'}{' '}
						</AboutItemTitle>
						<AboutItemText>
							{language === 'uk'
								? 'Тільки найкращі матеріли та технології відібрані часом.'
								: 'Only the best materials and technologies have been selected over time.'}
						</AboutItemText>
					</AboutItem>
					<AboutItem>
						<CiCamera color={palette.white} size={'30%'} />
						<AboutItemTitle>
							{language === 'uk' ? 'Дизайн' : 'Design'}{' '}
						</AboutItemTitle>
						<AboutItemText>
							{language === 'uk'
								? 'Унікальні нові рішення та різноманітність матеріалів.'
								: 'Unique new solutions and variety of materials.'}
						</AboutItemText>
					</AboutItem>
					<AboutItem>
						<CiShuffle color={palette.white} size={'30%'} />
						<AboutItemTitle>
							{language === 'uk' ? 'Тяга та видув' : 'Thrust and blow'}{' '}
						</AboutItemTitle>
						<AboutItemText>
							{language === 'uk'
								? 'Комфортна тяга, регулююча диффузором та найефектніші видуви диму.'
								: 'Comfortable thrust, regulating with a diffuser and the most effective puffs of smoke.'}
						</AboutItemText>
					</AboutItem>
					<AboutItem>
						<CiHome color={palette.white} size={'30%'} />
						<AboutItemTitle>
							{language === 'uk' ? 'Комфортність' : 'Comfort'}{' '}
						</AboutItemTitle>
						<AboutItemText>
							{language === 'uk'
								? 'Зручність у використанні, простота збірки та оптимальні розміри.'
								: 'Ease of use, ease of assembly and optimal dimensions.'}
						</AboutItemText>
					</AboutItem>
				</Aboutlist>
			</Container>
		</Section>
	);
};

export default About;
