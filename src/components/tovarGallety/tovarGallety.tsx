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

type GalleryProps = {};

const TovarGallery: FC<GalleryProps> = props => {
  const [swpPoint, setSwpPoint] = useState<number>(0);
  const [touchX, setTouchX] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [sliderListWidth, setSliderListWidth] = useState<number>(0);
  const [transition, setTransition] = useState<boolean>(true);

  const [galleryItams, setGalleryItams] = useState<Tovar[]>([]);

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
    function resize() {
      const _w = sliderList.current?.firstElementChild?.scrollWidth;
      if (_w) {
        setWidth(_w + 20);
      }
      setSwpPoint(0);
      if (sliderList.current)
        setSliderListWidth(sliderList.current?.scrollWidth);
    }
    async function getPopul() {
      const { data } = await axios.get('tovar/populate');
      setGalleryItams(data.tovars);
    }
    getPopul();
    window.addEventListener('resize', resize);
    resize();
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  function swap(swap: 'left' | 'right') {
    switch (swap) {
      case 'left':
        swpPoint !== 0 && setSwpPoint(swp => swp + width);
        break;
      case 'right':
        setSwpPoint(swp => swp - width);

        // const w = swapEl.current?.offsetWidth;
        // if (w) {
        //   sliderListWidth >= swpPoint * -1 + w + 150 &&
        // }
        break;

      default:
        break;
    }
  }

  return (
    <Section id="tovarGallery" bgc="#000">
      <Container>
        <Box>
          <Slider
            ref={swapEl}
            onTouchStart={e => {
              setTouchX(e.changedTouches[0].clientX);
              setTransition(false);
            }}
            onTouchEnd={e => {
              setTransition(true);
              // if (touchX - e.changedTouches[0].clientX > 50) {
              //   swap('right');
              // } else if (touchX - e.changedTouches[0].clientX < -50) {
              //   swap('left');
              // }
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
              disabled={sliderListWidth <= swpPoint * -1 + width + 150}
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

export default TovarGallery;