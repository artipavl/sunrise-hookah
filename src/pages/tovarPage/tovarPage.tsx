import React, { FC, useState, useEffect } from 'react';
import Heder from '../../components/header/heder';
import {
	BtnArrow,
	BtnImg,
	ButtonCase,
	ContainerTovar,
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
	SubinfoBox,
} from './tovarPage.style';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectTovars } from '../../redux/tovars/slice';
import axios from 'axios';
import Tovar from '../../Types/tovar';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { addToBasket } from '../../redux/basket/basketSlice';

type TovarPageProps = {};

const TovarPage: FC<TovarPageProps> = props => {
	const [tovar, setTovar] = useState<Tovar | null>(null);
	const tovars = useAppSelector(selectTovars);
	const { id } = useParams();
	const [imgUrl, setImgUrl] = useState(0);
	const [quantity, setQuantity] = useState<number>(1);

	const dispatch = useAppDispatch();

	useEffect(() => {
		const get = async (id: string | undefined, tovars: Tovar[]) => {
			if (id) {
				const tovar = tovars.find(item => item.id === id);
				if (!tovar) {
					try {
						const { data } = await axios.get(`/tovar/${id}`);
						setTovar(data as Tovar);
					} catch (error) {}
				}
				tovar && setTovar(tovar);
			}
		};

		get(id, tovars);
	}, [id, tovars]);

	if (!tovar) {
		return <div>Fuck U</div>;
	}

	console.log(tovar?.description.ua);

	return (
		<SectionTovar h>
			<Heder></Heder>
			<ContainerTovar>
				<Gallery>
					<ImgBox>
						<BtnArrow type="button" position={true}>
							<MdKeyboardArrowLeft size={40} />
						</BtnArrow>

						<Img src={tovar.fotos[imgUrl]} alt="foto hookah" />

						<BtnArrow type="button" position={false}>
							<MdKeyboardArrowRight size={40} />{' '}
						</BtnArrow>
					</ImgBox>
					<MiniGallery>
						{tovar?.fotos.map((foto, index) => (
							<MiniGalleryItem key={foto}>
								<BtnImg type="button" onClick={() => setImgUrl(index)}>
									<MiniImg src={foto} alt="фото кальяну" />
								</BtnImg>
							</MiniGalleryItem>
						))}
					</MiniGallery>
				</Gallery>
				<MainInfoBox>
					<H1>{tovar?.name.ua}</H1>
					<FormBox
						onSubmit={e => {
							e.preventDefault();

							dispatch(addToBasket({ ...tovar, baskeQuantity: quantity }));
						}}
					>
						<Price>Ціна: {tovar?.cost}грн.</Price>
						<InputQuantity
							type="number"
							name={'quantity'}
							min={1}
							value={quantity}
							onChange={e => setQuantity(Number(e.currentTarget.value))}
						/>
						<ButtonCase type="submit">Додати в кошик</ButtonCase>
					</FormBox>
				</MainInfoBox>
				<SubinfoBox>
					<div dangerouslySetInnerHTML={{ __html: tovar.parameters.ua }}></div>
					<div dangerouslySetInnerHTML={{ __html: tovar.description.ua }}></div>
				</SubinfoBox>
			</ContainerTovar>
		</SectionTovar>
	);
};

export default TovarPage;
