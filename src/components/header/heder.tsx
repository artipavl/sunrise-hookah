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

type HederProps = {};

const Heder: FC<HederProps> = props => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
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
                  <li>
                    <NavLinkItem to="/">КАЛЬЯНИ</NavLinkItem>
                  </li>
                  <li>
                    <NavLinkItem to="/">КОЛБИ</NavLinkItem>
                  </li>
                  <li>
                    <NavLinkItem to="/">ЧАШІ</NavLinkItem>
                  </li>
                </DropMenuList>
              </DropMenu>
            </NavListItem>
            <NavListItem>
              <NavLinkItem to="#about">ПРО НАС</NavLinkItem>
            </NavListItem>
            <NavListItem>
              <NavLinkItem to="/">КОНТАКТИ</NavLinkItem>
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
