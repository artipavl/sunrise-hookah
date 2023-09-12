import React, { FC, useState, useEffect } from 'react';
import Heder from '../../components/header/heder';
import {
	BtnArrow,
	BtnImg,
	ButtonCase,
	ButtonNav,
	ButtonValue,
	ContainerTovar,
	CustomInput,
	FormBox,
	Gallery,
	H1,
	Img,
	ImgBox,
	InputQuantity,
	MainInfoBox,
	MiniGallery,
	MiniGalleryItem,
	MiniImg,
	Price,
	SectionTovar,
	SubInfoItem,
	SubinfoBox,
} from './tovarPage.style';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectTovars } from '../../redux/tovars/slice';
import axios from 'axios';
import Tovar from '../../Types/tovar';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { addToBasket } from '../../redux/basket/basketSlice';
import { selectLanguage } from '../../redux/language/languageSelectors';
import Loader from '../../reuseСomponents/loader/loader';

type TovarPageProps = {};

const TovarPage: FC<TovarPageProps> = props => {
	const [tovar, setTovar] = useState<Tovar | null>(null);
	const [quantity, setQuantity] = useState<number>(1);
	const [imgUrl, setImgUrl] = useState(0);

	const tovars = useAppSelector(selectTovars);
	const language = useAppSelector(selectLanguage);

	const { id } = useParams();

	const dispatch = useAppDispatch();
	const navigate = useNavigate()

	useEffect(() => {
		const get = async (id: string | undefined, tovars: Tovar[]) => {
			if (id) {
				let tovar = tovars.find(item => item.id === id);
				if (!tovar) {
					try {
						const { data } = await axios.get(`/tovar/${id}`);
						tovar = data as Tovar
					} catch (error) {

					}
				}
				tovar ? setTovar(tovar): navigate('/');
			}
		};

		get(id, tovars);
	}, [id, navigate, tovars]);

	if (!tovar) {
		return <Loader />
	}

	function onChangeCapacity(quantity: number, step: number) {
		if (quantity + step <= 0) {
			setQuantity(1);
			return;
		}
		const newQuantity = quantity + step;
		setQuantity(newQuantity);
	}

	return (
		<>
			<Heder></Heder>
			<SectionTovar h>
				<ContainerTovar>
					<H1 h> {language==="uk" ? tovar?.nameUKR : tovar?.nameEN}</H1>
					<Gallery>
						<ImgBox>
							<BtnArrow
								type="button"
								position={true}
								onClick={() =>
									imgUrl === 0
										? setImgUrl(tovar.fotos.length - 1)
										: setImgUrl(() => imgUrl - 1)
								}
							>
								<MdKeyboardArrowLeft size={40} />
							</BtnArrow>

							<Img src={tovar.fotos[imgUrl]} alt="photo hookah" />

							<BtnArrow
								type="button"
								position={false}
								onClick={() =>
									imgUrl === tovar.fotos.length - 1
										? setImgUrl(0)
										: setImgUrl(() => imgUrl + 1)
								}
							>
								<MdKeyboardArrowRight size={40} />
							</BtnArrow>
						</ImgBox>
						<MiniGallery>
							{tovar?.fotos.map((foto, index) => (
								<MiniGalleryItem key={foto} isActive={index === imgUrl}>
									<BtnImg type="button" onClick={() => setImgUrl(index)}>
										<MiniImg src={foto} alt="photo hookah" />
									</BtnImg>
								</MiniGalleryItem>
							))}
						</MiniGallery>
					</Gallery>
					<MainInfoBox>
						<H1>{language==="uk" ? tovar?.nameUKR : tovar?.nameEN}</H1>
						<FormBox
							onSubmit={e => {
								e.preventDefault();

								dispatch(addToBasket({ ...tovar, baskeQuantity: quantity }));
							}}
						>
							<Price>Ціна: {tovar?.cost}грн.</Price>
							<CustomInput>
								<InputQuantity
									type="number"
									name={'quantity'}
									min={1}
									value={quantity}
									onChange={e => setQuantity(Number(e.currentTarget.value))}
								/>
								<ButtonNav>
									<ButtonValue
										type="button"
										disabled={Boolean(quantity === 1)}
										onClick={e => onChangeCapacity(quantity, Number(-1))}
									>
										-
									</ButtonValue>
									<ButtonValue
										type="button"
										onClick={e => onChangeCapacity(quantity, Number(1))}
									>
										+
									</ButtonValue>
								</ButtonNav>
							</CustomInput>
							<ButtonCase type="submit">Додати в кошик</ButtonCase>
						</FormBox>
					</MainInfoBox>
					<SubinfoBox>
						<SubInfoItem
							dangerouslySetInnerHTML={{ __html: tovar.parametersUKR }}
						></SubInfoItem>
						<SubInfoItem
							dangerouslySetInnerHTML={{ __html: tovar.descriptionUKR }}
						></SubInfoItem>
					</SubinfoBox>
				</ContainerTovar>
			</SectionTovar>
		</>
	);
};

export default TovarPage;
