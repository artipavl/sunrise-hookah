import React, { FC } from 'react';
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';
import { ReactComponent as QUALITY } from '../../images/about/QUALITY.svg';
import { ReactComponent as Stars } from '../../images/about/stars.svg';
import { ReactComponent as Gear } from '../../images/about/gear.svg';
import { ReactComponent as Moon } from '../../images/about/moon.svg';
import { ReactComponent as Biceps } from '../../images/about/biceps.svg';
import { ReactComponent as Coins } from '../../images/about/coins.svg';
import {
  AboutItem,
  AboutItemText,
  AboutItemTitle,
  AboutTitle,
  Aboutlist,
} from './about.style';

type AboutProps = {};

const About: FC<AboutProps> = props => {
  return (
    <Section id="about" bgc="#000" h={true}>
      <Container flex={'center'}>
        <AboutTitle>SUNRISE HOOKAH - це</AboutTitle>
        <Aboutlist>
          <AboutItem>
            <QUALITY color="#fff" width={'30%'} />
            <AboutItemTitle>ЯКІСНІ МАТЕРІАЛИ</AboutItemTitle>
            <AboutItemText>
              Виготовлений з нержавіючої сталі марки AISI 304 і якісної
              поліацеталі на нашому виробництві.
            </AboutItemText>
          </AboutItem>
          <AboutItem>
            <Stars color="#fff" width={'30%'} />
            <AboutItemTitle>КОМФОРТ ПАЛІННЯ</AboutItemTitle>
            <AboutItemText>
              Легка, приємна тяга. Унікальна продувка за 1-2 рази.
            </AboutItemText>
          </AboutItem>
          <AboutItem>
            <Gear color="#fff" width={'30%'} />
            <AboutItemTitle>ЗРУЧНІСТЬ ЗБІРКИ</AboutItemTitle>
            <AboutItemText>
              Відсутня різьба в полаіцеталі. Порт на щільній притирці. Шахта
              розбірна.
            </AboutItemText>
          </AboutItem>
          <AboutItem>
            <Moon color="#fff" width={'30%'} />
            <AboutItemTitle>ДИЗАЙН</AboutItemTitle>
            <AboutItemText>
              Великий вибір моделей, декоративних накладок та колб. Блюдце
              Орбіта унікальної форми.
            </AboutItemText>
          </AboutItem>
          <AboutItem>
            <Biceps color="#fff" width={'30%'} />
            <AboutItemTitle>НАДІЙНІСТЬ</AboutItemTitle>
            <AboutItemText>
              TIAGA HOOKAH - український виробник кальянів, на ринку з 2018
              року.
            </AboutItemText>
          </AboutItem>
          <AboutItem>
            <Coins color="#fff" width={'30%'} />
            <AboutItemTitle>ДОСТУНА ЦІНА</AboutItemTitle>
            <AboutItemText>Топова якість за вигідну ціну.</AboutItemText>
          </AboutItem>
        </Aboutlist>
      </Container>
    </Section>
  );
};

export default About;
