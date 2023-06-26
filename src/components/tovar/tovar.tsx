import React, { FC } from 'react';
import {
  TovarBox,
  TovarImageBox,
  TovarImageBoxUpper,
  TovarInformation,
  TovarInformationAvailability,
} from './tovar.style';

type TovarProps = {};

const Tovar: FC<TovarProps> = props => {
  return (
    <TovarBox>
      <TovarImageBox>
        <img
          src="https://static.wixstatic.com/media/82b1b3_533aa229a9d74461ab29d69b999f85cc~mv2.jpg/v1/fill/w_188,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/82b1b3_533aa229a9d74461ab29d69b999f85cc~mv2.jpg"
          alt="adsa"
        />
        <TovarImageBoxUpper id="Upper">Перегляд</TovarImageBoxUpper>
      </TovarImageBox>
      <TovarInformation>
        <span>Кальян Tiaga Galaxy Orbita</span>
        <span>3 350,00₴</span>
        <TovarInformationAvailability>В наявності</TovarInformationAvailability>
      </TovarInformation>
    </TovarBox>
  );
};

export default Tovar;
