import React, { FC } from 'react';
import {
  BasketItam,
  BasketItamBox,
  BasketItamDelete,
  BasketItamImage,
  BasketItamInformation,
  BasketItamInput,
  BasketList,
} from './basketTovars.style';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectBasket } from '../../redux/basket/basketSelectors';
import {
  deleteFromBasket,
  updateQuantity,
} from '../../redux/basket/basketSlice';
import { AiFillDelete } from 'react-icons/ai';

type BasketTovarsProps = {};

const BasketTovars: FC<BasketTovarsProps> = props => {
  const tovars = useAppSelector(selectBasket);

  const dispatch = useAppDispatch();
  return (
    <BasketList>
      {tovars.map(tovar => (
        <BasketItam key={tovar.id}>
          <span>{tovar.name.ua}</span>
          <BasketItamBox>
            <div>
              <BasketItamImage
                src={
                  tovar.fotos[0]
                    ? tovar.fotos[0]
                    : 'https://kor.ill.in.ua/m/610x385/2722809.jpg'
                }
                alt={tovar.name.en}
              />
            </div>

            <BasketItamInformation>
              <span>{tovar.cost} грн.</span>
            </BasketItamInformation>

            <BasketItamInput
              type="number"
              name="quantity"
              id="quantity"
              value={tovar.baskeQuantity}
              onChange={e =>
                dispatch(
                  updateQuantity({
                    id: tovar.id,
                    baskeQuantity: Number(e.target.value),
                  })
                )
              }
            />
            <BasketItamDelete
              id="delete"
              type="button"
              onClick={() => dispatch(deleteFromBasket(tovar.id))}
            >
              <AiFillDelete />
            </BasketItamDelete>
          </BasketItamBox>
        </BasketItam>
      ))}
    </BasketList>
  );
};

export default BasketTovars;
