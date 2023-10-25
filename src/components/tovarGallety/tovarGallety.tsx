import React, { FC, useState, useEffect, useRef } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';
import {
	Box,
	Slider,
	SliderButtonLeft,
	SliderButtonRight,
	SliderItem,
	SliderList,
} from './tovarGallety.style';
import axios from 'axios';
import Tovar from '../../Types/tovar';
import TovarItem from '../tovar/tovar';
import { useAppSelector } from '../../hooks';
import { selectTovars } from '../../redux/tovars/slice';

type GalleryProps = {};

const TovarGallery: FC<GalleryProps> = props => {
	const tovars = useAppSelector(selectTovars);
	const [swpPoint, setSwpPoint] = useState<number>(0);
	const [touchX, setTouchX] = useState<number>(0);
	const [width, setWidth] = useState<number>(0);
	const [sliderListWidth, setSliderListWidth] = useState<number>(0);
	const [transition, setTransition] = useState<boolean>(true);

	const [galleryItams, setGalleryItams] = useState<Tovar[]>(() => tovars);

	const swapEl = useRef<HTMLHeadingElement>(null);
	const sliderList = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (swpPoint > 0) {
			setSwpPoint(0);
		}
		if (
			swapEl.current?.offsetWidth &&
			swpPoint < (sliderListWidth - swapEl.current?.offsetWidth) * -1
		) {
			setSwpPoint((sliderListWidth - swapEl.current?.offsetWidth) * -1);
		}
	}, [sliderListWidth, swpPoint]);

	useEffect(() => {
		if (transition) {
			const swpEl = swpPoint / width;
			if (swpEl % 1 < -0.5) {
				setSwpPoint(Math.ceil(swpEl * -1) * width * -1);
			} else if (swpEl % 1 !== 0) {
				setSwpPoint((Math.ceil(swpEl * -1) - 1) * width * -1);
			}
		}
	}, [swpPoint, transition, width]);

	useEffect(() => {
		async function getPopul() {
			const { data } = await axios.get('tovar/populate');
			setGalleryItams(data.tovars);
		}
		getPopul();
		resize();

		window.addEventListener('resize', resize);

		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	useEffect(() => {
		resize();
	}, [sliderList.current?.firstElementChild?.scrollWidth]);

	function resize() {
		const _w = sliderList.current?.firstElementChild?.scrollWidth;
		if (_w) {
			setWidth(_w + 20);
		}
		setSwpPoint(0);
		if (sliderList.current) setSliderListWidth(sliderList.current?.scrollWidth);
	}

	function swap(swap: 'left' | 'right') {
		switch (swap) {
			case 'left':
				swpPoint !== 0 && setSwpPoint(swp => swp + width);
				break;
			case 'right':
				setSwpPoint(swp => swp - width);
				break;

			default:
				break;
		}
	}

	return (
		<Section id="tovarGallery" bgc="#000" h>
			<Container>
				<Box>
					<Slider
						ref={swapEl}
						onTouchStart={e => {
							document.body.style.overflow = 'hidden';
							setTouchX(e.changedTouches[0].clientX);
							setTransition(false);
						}}
						onTouchEnd={e => {
							document.body.style.overflow = 'auto';
							setTransition(true);
						}}
						onTouchMoveCapture={e => {
							const width = touchX - e.changedTouches[0].clientX;
							setSwpPoint(swp => swp - width);
							setTouchX(e.changedTouches[0].clientX);
						}}
					>
						<SliderList
							ref={sliderList}
							left={swpPoint}
							transition={transition}
						>
							{galleryItams.map(tovar => (
								<SliderItem key={tovar.id}>
									<TovarItem tovar={tovar} />
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
								swapEl.current?.offsetWidth &&
									swpPoint ===
										(sliderListWidth - swapEl.current?.offsetWidth) * -1
							)}
							type="button"
							onClick={() => {
								swap('right');
							}}
						>
							<TfiAngleRight />
						</SliderButtonRight>
					</Slider>
				</Box>
			</Container>
		</Section>
	);
};

export default TovarGallery;
