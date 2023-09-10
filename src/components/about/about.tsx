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
import { useAppSelector } from '../../hooks';
import { selectLanguage } from '../../redux/language/languageSelectors';

type AboutProps = {};

const About: FC<AboutProps> = props => {
  const language = useAppSelector(selectLanguage);
  return (
    <Section id="about" bgc="#000" h={true}>
      <Container flex={'center'}>
        <AboutTitle>{language==="uk" ? "SUNRISE HOOKAH" : "SUNRISE HOOKAH is"}</AboutTitle>
        <Aboutlist>
          <AboutItem>
            <QUALITY color="#fff" width={'30%'} />
            <AboutItemTitle>{language==="uk" ? "ЯКІСНІ МАТЕРІАЛИ" : "QUALITY MATERIALS"} </AboutItemTitle>
            <AboutItemText>
            {language==="uk" ? "Виготовлений з нержавіючої сталі марки AISI 304 і якісної поліацеталі на нашому виробництві." : "Made of AISI 304 stainless steel and high quality polyacetals in our production."}
            </AboutItemText>
          </AboutItem>
          <AboutItem>
            <Stars color="#fff" width={'30%'} />
            <AboutItemTitle>{language==="uk" ? "КОМФОРТ ПАЛІННЯ" : "COMFORT OF SMOKING"} </AboutItemTitle>
            <AboutItemText>
            {language==="uk" ? "Легка, приємна тяга. Унікальна продувка за 1-2 рази." : "Light, pleasant pull. Unique purging in 1-2 times."}
              
            </AboutItemText>
          </AboutItem>
          <AboutItem>
            <Gear color="#fff" width={'30%'} />
            <AboutItemTitle>{language==="uk" ? "ЗРУЧНІСТЬ ЗБІРКИ" : "CONVENIENCE OF ASSEMBLY"} </AboutItemTitle>
            <AboutItemText>
            {language==="uk" ? "Відсутня різьба в полаіцеталі. Порт на щільній притирці. Шахта розбірна." : "There is no thread in the polyacetal. Port on a tight lapping. The mine is collapsible."}
            </AboutItemText>
          </AboutItem>
          <AboutItem>
            <Moon color="#fff" width={'30%'} />
            <AboutItemTitle>{language==="uk" ? "ДИЗАЙН" : "DESIGN"} </AboutItemTitle>
            <AboutItemText>
            {language==="uk" ? "Великий вибір моделей, декоративних накладок та колб. Блюдце Орбіта унікальної форми." : "A large selection of models, decorative overlays and flasks. Orbit saucer of a unique shape."}
            </AboutItemText>
          </AboutItem>
          <AboutItem>
            <Biceps color="#fff" width={'30%'} />
            <AboutItemTitle>{language==="uk" ? "НАДІЙНІСТЬ" : "RELIABILITY"} </AboutItemTitle>
            <AboutItemText>
            {language==="uk" ? "SUNRISE HOOKAH - український виробник кальянів, на ринку з 2018 року." : "SUNRISE HOOKAH is a Ukrainian manufacturer of hookahs, on the market since 2018."} 
            </AboutItemText>
          </AboutItem>
          <AboutItem>
            <Coins color="#fff" width={'30%'} />
            <AboutItemTitle>{language==="uk" ? "ДОСТУПНА ЦІНА" : "AFFORDABLE PRICE"}</AboutItemTitle>
            <AboutItemText>{language==="uk" ? "Топова якість за вигідну ціну." : "Top quality for a good price."}</AboutItemText>
          </AboutItem>
        </Aboutlist>
      </Container>
    </Section>
  );
};

export default About;
