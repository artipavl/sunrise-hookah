import React, { FC } from 'react';
import {
  TovarBox,
  TovarImageBox,
  TovarImageBoxUpper,
  TovarInformation,
  TovarInformationAvailability,
} from './tovar.style';
import TovarType from '../../Types/tovar';

type TovarProps = {
  tovar: TovarType;
};

const Tovar: FC<TovarProps> = ({ tovar }) => {
  return (
    <TovarBox>
      <TovarImageBox>
        <img
          src={
            tovar.fotos[0]
              ? tovar.fotos[0]
              : 'https://kor.ill.in.ua/m/610x385/2722809.jpg'
          }
          alt={tovar.name.eu}
        />
        <TovarImageBoxUpper id="Upper">Перегляд</TovarImageBoxUpper>
      </TovarImageBox>
      <TovarInformation>
        <span>{tovar.name.eu}</span>
        <span>{tovar.cost}₴</span>
        <TovarInformationAvailability>
          {tovar.quantity > 0 ? 'В наявності' : 'відсутній'}
        </TovarInformationAvailability>
      </TovarInformation>
    </TovarBox>
  );
};

export default Tovar;
