import React, { FC, useState } from 'react';
import {
  AiOutlineBars,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { TiArrowSortedDown } from 'react-icons/ti';
import Logo from '../../images/sunrise-hookah.jpg';
import {
  DropMenu,
  DropMenuButton,
  DropMenuList,
  HeaderBox,
  MenuBatton,
  Nav,
  NavLinkItem,
  NavList,
  NavListItem,
  ShoppingCart,
} from './heder.style';

type HederProps = {};

const Heder: FC<HederProps> = props => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  return (
    <HeaderBox>
      <MenuBatton type="button" onClick={() => setMenu(menu => !menu)}>
        {menu ? (
          <AiOutlineClose color="#fff" size="30px" />
        ) : (
          <AiOutlineBars color="#fff" size="30px" />
        )}
      </MenuBatton>

      <img src={Logo} alt="Logo" width="40px" />

      <Nav
        open={menu}
        onClick={e => {
          if (
            (e.currentTarget === e.target && e.currentTarget.nodeName) === 'NAV'
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
                  <NavLinkItem to="/">ЧАШІ</NavLinkItem>
                </li>
                <li>
                  <NavLinkItem to="/">КАЛЬЯНИ</NavLinkItem>
                </li>
              </DropMenuList>
            </DropMenu>
          </NavListItem>
          <NavListItem>
            <NavLinkItem to="/">ПРО НАС</NavLinkItem>
          </NavListItem>
          <NavListItem>
            <NavLinkItem to="/">КОНТАКТИ</NavLinkItem>
          </NavListItem>
        </NavList>
      </Nav>
      <ShoppingCart to="/">
        <AiOutlineShoppingCart color="#fff" size="30px" />
      </ShoppingCart>
    </HeaderBox>
  );
};

export default Heder;
