import React, { FC, useState } from 'react';
import {
  AiOutlineBars,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { TiArrowSortedDown } from 'react-icons/ti';

import {
  CartSvgBox,
  DropMenu,
  DropMenuButton,
  DropMenuList,
  HeaderBox,
  HeaderSection,
  MenuBatton,
  Nav,
  NavLinkItem,
  NavList,
  NavListItem,
  Quantity,
  ShoppingCart,
} from './heder.style';
import Logo from '../logo/logo';
import useScrolltoId from '../../helpers/useScrolltoId';
import { useAppSelector } from '../../hooks';
import { selectTypes } from '../../redux/types/slice';

type HederProps = {};

const Heder: FC<HederProps> = props => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const ScrolltoId = useScrolltoId();
  const types = useAppSelector(selectTypes);

  return (
    <HeaderSection>
      <HeaderBox>
        <MenuBatton type="button" onClick={() => setMenu(menu => !menu)}>
          {menu ? (
            <AiOutlineClose color="#fff" size="30px" />
          ) : (
            <AiOutlineBars color="#fff" size="30px" />
          )}
        </MenuBatton>

        <Logo />

        <Nav
          open={menu}
          onClick={e => {
            if (
              (e.currentTarget === e.target && e.currentTarget.nodeName) ===
              'NAV'
            ) {
              setMenu(false);
            }
          }}
        >
          <NavList>
            <NavListItem>
              <DropMenu>
                <DropMenuButton
                  open={subMenu}
                  onClick={() => setSubMenu(subMenu => !subMenu)}
                >
                  <span>МАГАЗИН</span>
                  <TiArrowSortedDown size="10px" color="#fff" />
                </DropMenuButton>

                <DropMenuList open={subMenu}>
                  {types.map(type => (
                    <li key={type.id}>
                      <NavLinkItem to={`/tovar/${type.eu}`}>
                        {type.ua}
                      </NavLinkItem>
                    </li>
                  ))}
                </DropMenuList>
              </DropMenu>
            </NavListItem>
            <NavListItem>
              <NavLinkItem
                to="/#about"
                onClick={() => ScrolltoId('about', '/')}
              >
                ПРО НАС
              </NavLinkItem>
            </NavListItem>
            <NavListItem>
              <NavLinkItem
                to="/#contacts"
                onClick={() => ScrolltoId('contacts', '/')}
              >
                КОНТАКТИ
              </NavLinkItem>
            </NavListItem>
          </NavList>
        </Nav>
        <ShoppingCart to="/">
          <CartSvgBox>
            <AiOutlineShoppingCart color="#fff" size="30px" />
            <Quantity>
              <span>0</span>
            </Quantity>
          </CartSvgBox>
        </ShoppingCart>
      </HeaderBox>
    </HeaderSection>
  );
};

export default Heder;
