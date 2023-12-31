import React, { FC, useState, useEffect, useRef } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';
import {
	Box,
	Promotion,
	PromotionLink,
	PromotionTitle,
	Slider,
	SliderButtonLeft,
	SliderButtonRight,
	SliderItem,
	SliderItemImg,
	SliderList,
} from './gallery.style';
import { useAppSelector } from '../../hooks';
import { selectLanguage } from '../../redux/language/languageSelectors';
const galleryImages = [
	{
		id: 1,
		url: 'https://www.hookahbunny.com/wp-content/uploads/2022/03/sunrise_windskull_luminescent_shisha-430x430.jpeg',
	},
	{
		id: 2,
		url: 'https://www.hookahbunny.com/wp-content/uploads/2022/03/sunrise_windskull_black_purge-430x430.jpeg',
	},
	{
		id: 3,
		url: 'https://www.hookahbunny.com/wp-content/uploads/2022/03/sunrise_windskull_luminescent_hookah-430x430.jpeg',
	},
];

type GalleryProps = {};

const Gallery: FC<GalleryProps> = props => {
	const [swpPoint, setSwpPoint] = useState<number>(0);
	const [touchX, setTouchX] = useState<number>(0);

	const language = useAppSelector(selectLanguage);

	const swapEl = useRef<HTMLHeadingElement>(null);
	const sliderList = useRef<HTMLUListElement>(null);

	useEffect(() => {
		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	function resize() {
		setSwpPoint(0);
	}

	function swap(swap: 'left' | 'right') {
		const width = swapEl.current?.offsetWidth;
		const totalWidth = sliderList.current?.scrollWidth;
		if (width && totalWidth) {
			switch (swap) {
				case 'left':
					swpPoint !== 0 && setSwpPoint(swp => swp + width);
					break;
				case 'right':
					totalWidth >= swpPoint * -1 + width + 150 &&
						setSwpPoint(swp => swp - width);
					break;

				default:
					break;
			}
		}
	}

	return (
		<Section id="gallery" bgc="#000" h>
			<Container>
				<Box>
					<Promotion>
						<PromotionTitle>
							{language === 'uk' ? 'ДАВАЙ ТЯНИ!' : "LET'S BREATHE!"}
						</PromotionTitle>
						<PromotionLink to="/tovar/hookahs">
							{language === 'uk' ? 'В МАГАЗИН' : 'SHOP'}
						</PromotionLink>
					</Promotion>
					<Slider
						ref={swapEl}
						onTouchStart={e => setTouchX(e.changedTouches[0].clientX)}
						onTouchEnd={e => {
							if (touchX - e.changedTouches[0].clientX > 50) {
								swap('right');
							} else if (touchX - e.changedTouches[0].clientX < -50) {
								swap('left');
							}
						}}
					>
						<SliderList ref={sliderList} left={swpPoint}>
							{galleryImages.map(img => (
								<SliderItem key={img.id}>
									<SliderItemImg src={img.url} alt="asda" />
								</SliderItem>
							))}
						</SliderList>
						<SliderButtonLeft
							disabled={swpPoint === 0}
							type="button"
							onClick={() => swap('left')}
						>
							<TfiAngleLeft />
						</SliderButtonLeft>
						<SliderButtonRight
							disabled={Boolean(
								sliderList.current?.scrollWidth &&
									swapEl.current?.offsetWidth &&
									sliderList.current?.scrollWidth <
										swpPoint * -1 + swapEl.current?.offsetWidth + 150
							)}
							type="button"
							onClick={() => swap('right')}
						>
							<TfiAngleRight />
						</SliderButtonRight>
					</Slider>
				</Box>
			</Container>
		</Section>
	);
};

export default Gallery;
