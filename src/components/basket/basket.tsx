import React, { FC } from 'react';
import {
  BasketSection,
  BasketBox,
  BasketHeader,
  BasketCloseButton,
  BasketList,
  Buy,
  BasketSum,
  BasketItam,
  BasketItamImage,
  BasketItamInput,
  BasketItamInformation,
  BasketItamDelete,
} from './basket.style';
import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectBasket } from '../../redux/basket/basketSelectors';
import {
  deleteFromBasket,
  updateQuantity,
} from '../../redux/basket/basketSlice';
import { AiFillDelete } from 'react-icons/ai';

type BasketProps = {
  openBasket: () => void;
};

const portal = document.getElementById('portal') as HTMLElement;

export const Basket: FC<BasketProps> = ({ openBasket }) => {
  const tovars = useAppSelector(selectBasket);

  const dispatch = useAppDispatch();

  return createPortal(
    <BasketSection onClick={e => e.target === e.currentTarget && openBasket()}>
      <BasketBox>
        <BasketHeader>
          <BasketCloseButton type="button" onClick={() => openBasket()}>
            {'>'}
          </BasketCloseButton>
          <h2>Кошик</h2>
        </BasketHeader>
        <BasketList>
          {tovars.map(tovar => (
            <BasketItam key={tovar.id}>
              <BasketItamImage
                src={
                  tovar.fotos[0]
                    ? tovar.fotos[0]
                    : 'https://kor.ill.in.ua/m/610x385/2722809.jpg'
                }
                alt={tovar.nameEN}
              />
              <BasketItamInformation>
                <span>{tovar.nameUKR}</span>
                <span>{tovar.cost} грн.</span>

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
              </BasketItamInformation>
              <BasketItamDelete
                id="delete"
                type="button"
                onClick={() => dispatch(deleteFromBasket(tovar.id))}
              >
                <AiFillDelete />
              </BasketItamDelete>
            </BasketItam>
          ))}
        </BasketList>
        <BasketSum>
          <samp>Сума: </samp>
          <samp>
            {tovars.reduce((a, b) => a + b.cost * b.baskeQuantity, 0)} грн
          </samp>
        </BasketSum>
        <Buy to="/checkout">Оформити</Buy>
      </BasketBox>
    </BasketSection>,
    portal
  );
};

export default Basket;
