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
	FlexBox,
	HeaderBox,
	HeaderLogo,
	HeaderSection,
	LanguageButton,
	LanguageList,
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
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectTypes } from '../../redux/types/slice';
import Basket from '../basket/basket';
import { selectBasket } from '../../redux/basket/basketSelectors';
import { selectLanguage } from '../../redux/language/languageSelectors';
import { updateLanguage } from '../../redux/language/languageSlice';

type HederProps = {};

const Heder: FC<HederProps> = props => {
	const [menu, setMenu] = useState(false);
	const [OpenBasket, setOpenBasket] = useState<boolean>(false);
	const [subMenu, setSubMenu] = useState(false);

	const types = useAppSelector(selectTypes);
	const language = useAppSelector(selectLanguage);
	const tovars = useAppSelector(selectBasket);

	const dispatch = useAppDispatch();

	const ScrolltoId = useScrolltoId();

	const OpenBasketset = () => {
		setOpenBasket(open => !open);
	};

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

				<HeaderLogo>
					<Logo />
				</HeaderLogo>

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
									<span>{language === 'uk' ? 'МАГАЗИН' : 'SHOP'}</span>
									<TiArrowSortedDown size="10px" color="#fff" />
								</DropMenuButton>

								<DropMenuList open={subMenu}>
									{types.map(type => (
										<li key={type.id}>
											<NavLinkItem
												to={`/tovar/${type.en}`}
												onClick={() => {
													setMenu(false);
												}}
											>
												{language === 'uk' ? type.ukr : type.en}
											</NavLinkItem>
										</li>
									))}
								</DropMenuList>
							</DropMenu>
						</NavListItem>
						<NavListItem>
							<NavLinkItem
								to="/#about"
								onClick={() => {
									ScrolltoId('about', '/');
									setMenu(false);
								}}
							>
								{language === 'uk' ? 'ПРО НАС' : 'ABOUT US'}
							</NavLinkItem>
						</NavListItem>
						<NavListItem>
							<NavLinkItem
								to="/#contacts"
								onClick={() => {
									ScrolltoId('contacts', '/');
									setMenu(false);
								}}
							>
								{language === 'uk' ? 'КОНТАКТИ' : 'CONTACTS'}
							</NavLinkItem>
						</NavListItem>
					</NavList>
				</Nav>
				<FlexBox>
					<LanguageList>
						<li>
							<LanguageButton
								active={language === 'uk'}
								type="button"
								onClick={() =>
									language !== 'uk' && dispatch(updateLanguage('uk'))
								}
							>
								UK
							</LanguageButton>
						</li>
						<li>
							<LanguageButton
								active={language === 'en'}
								type="button"
								onClick={() =>
									language !== 'en' && dispatch(updateLanguage('en'))
								}
							>
								EN
							</LanguageButton>
						</li>
					</LanguageList>
					<ShoppingCart onClick={OpenBasketset}>
						<CartSvgBox>
							<AiOutlineShoppingCart color="#fff" size="30px" />
							{tovars.length > 0 && (
								<Quantity>
									<span>{tovars.length}</span>
								</Quantity>
							)}
						</CartSvgBox>
					</ShoppingCart>
				</FlexBox>
			</HeaderBox>

			{OpenBasket && <Basket openBasket={OpenBasketset} />}
		</HeaderSection>
	);
};

export default Heder;
