import React, { FC, useEffect, useMemo, useState } from 'react';
import { Container } from '../../reuseСomponents/container.style';
import {
	CustomSliderBox,
	EmptyTovarList,
	FieldInput,
	FiltersBox,
	InputRadio,
	ItemOpt,
	NumbersSlider,
	ProgressBar,
	RangeBox,
	RangeInputMax,
	RangeInputMin,
	SectionTovars,
	SliderBar,
	SortCustomBtn,
	SortingBtn,
	Title,
	TovarList,
} from './product.style';
import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectTovars, selectTovarsLoading } from '../../redux/tovars/slice';
import { selectTypes } from '../../redux/types/slice';
import Heder from '../../components/header/heder';
import Tovar from '../../Types/tovar';
import TovarCard from '../../components/tovar/tovar';
import sortArrByKey from '../../helpers/sortArrByKey';
import Footer from '../../components/footer/footer';
import { selectLanguage } from '../../redux/language/languageSelectors';

type ProductProps = {};
interface sortingParamsTypes {
	name: string;
	nameEN: string;
	sortableParam: keyof Tovar;
	sortBy: boolean;
}
const sortingParams: sortingParamsTypes[] = [
	{
		name: 'Популярні',
		nameEN: 'Popularity',
		sortableParam: 'popularity',
		sortBy: true,
	},
	{
		name: 'Спочатку дешеві',
		nameEN: 'Cheap at first',
		sortableParam: 'cost',
		sortBy: true,
	},
	{
		name: 'Cпочатку дорожчі',
		nameEN: 'More expensive',
		sortableParam: 'cost',
		sortBy: false,
	},
	{
		name: 'За алфавітом',
		nameEN: 'Alphabetical',
		sortableParam: 'nameUKR',
		sortBy: true,
	},
	{
		name: 'Проти алфавіта',
		nameEN: 'Alphabetical-reverse',
		sortableParam: 'nameUKR',
		sortBy: false,
	},
];

const Product: FC<ProductProps> = () => {
	const tovarsSelect = useAppSelector(selectTovars);
	const [tovars, setTovars] = useState<Tovar[]>([]);
	const [isOpenSort, setIsOpenSort] = useState<boolean>(false);
	const [sortParams, setSortParams] = useState<number>(0);
	const [minPrice, setMinPrice] = useState<number>(1);
	const [maxPrice, setMaxPrice] = useState<number>(1);
	const [currentMin, setCurrentMin] = useState<number>(minPrice);
	const [currentMax, setCurrentMax] = useState<number>(maxPrice);

	const params = useParams();

	const types = useAppSelector(selectTypes);
	const start = useAppSelector(selectTovarsLoading);
	const language = useAppSelector(selectLanguage);

	const type = types.find(type => type.en === params.id?.toLowerCase());

	useEffect(() => {
		if (type?.en) {
			setTovars(tovarsSelect.filter(tovar => tovar.type === type.en));
		}
	}, [tovarsSelect, type]);

	const filtered = useMemo(() => {
		return tovars.filter(tovar => {
			return currentMax >= tovar.cost && tovar.cost >= currentMin;
		});
	}, [currentMax, currentMin, tovars]);

	const sorted = useMemo(() => {
		return sortArrByKey(
			filtered,
			sortingParams[sortParams].sortableParam,
			sortingParams[sortParams].sortBy
		);
	}, [filtered, sortParams]);
	useEffect(() => {
		const data = sortArrByKey(tovars, sortingParams[2].sortableParam, true);
		if (data.length > 0) {
			setMinPrice(data[0].cost);
			setMaxPrice(data[data.length - 1].cost);
		}
	}, [tovars]);

	useEffect(() => {
		setCurrentMax(maxPrice);
		setCurrentMin(minPrice);
	}, [maxPrice, minPrice]);

	if (!type) {
		return <Navigate to="/"></Navigate>;
	}

	return (
		<>
			<SectionTovars
				onClick={e => {
					e.target instanceof Element &&
						e.target?.nodeName !== 'BUTTON' &&
						setIsOpenSort(false);
				}}
			>
				<Heder></Heder>
				<Container>
					<Title>{language === 'uk' ? type.ukr : type.en}</Title>
					{!start ? (
						<p>loading...</p>
					) : (
						<>
							<FiltersBox>
								<SortCustomBtn>
									<SortingBtn
										type="button"
										onClick={() => {
											setIsOpenSort(false);
											setSortParams(0);
											setCurrentMax(maxPrice);
											setCurrentMin(minPrice);
										}}
									>
										{language === 'uk' ? 'Очистити фільтр' : 'Clean the filter'}
									</SortingBtn>
									<form>
										<SortingBtn
											type="button"
											onClick={() => setIsOpenSort(!isOpenSort)}
										>
											{language === 'uk'
												? sortingParams[sortParams].name
												: sortingParams[sortParams].nameEN}
										</SortingBtn>
										{sortingParams.map((param, index) => (
											<ItemOpt key={param.name} index={index} h={isOpenSort}>
												{language === 'uk' ? param.name : param.nameEN}
												<InputRadio
													name="sort"
													checked={index === sortParams}
													type="radio"
													value={index}
													onChange={() => {
														console.log(index)
														setSortParams(index);
														setIsOpenSort(false);
													}}
												/>
											</ItemOpt>
										))}
									</form>
								</SortCustomBtn>

								<CustomSliderBox>
									<NumbersSlider>
										<FieldInput
											type="number"
											name="min"
											id="minValue"
											min={minPrice}
											max={maxPrice}
											value={currentMin}
											onChange={e =>
												Number(e.target.value) <= currentMax
													? setCurrentMin(Number(e.target.value))
													: setCurrentMin(
															Math.round(currentMax - maxPrice / 100)
													  )
											}
										/>
									</NumbersSlider>

									<SliderBar>
										<ProgressBar
											positionLeft={currentMin / (maxPrice / 100)}
											positionRight={currentMax / (maxPrice / 100)}
										></ProgressBar>
										<RangeBox>
											<RangeInputMin
												type="range"
												min={minPrice}
												max={maxPrice}
												value={currentMin}
												step={1}
												onChange={e =>
													Number(e.target.value) <= currentMax
														? setCurrentMin(Math.round(Number(e.target.value)))
														: setCurrentMin(
																Math.round(currentMax - maxPrice / 100)
														  )
												}
											/>
											<RangeInputMax
												type="range"
												min={minPrice}
												max={maxPrice}
												value={currentMax}
												step={1}
												onChange={e =>
													Number(e.target.value) >= currentMin
														? setCurrentMax(Math.round(Number(e.target.value)))
														: setCurrentMax(
																Math.round(currentMin + maxPrice / 100)
														  )
												}
											/>
										</RangeBox>
									</SliderBar>
									<NumbersSlider>
										<FieldInput
											type="number"
											name="max"
											id="maxValue"
											min={minPrice}
											max={maxPrice}
											value={currentMax}
											onChange={e =>
												Number(e.target.value) >= currentMin
													? setCurrentMax(Number(e.target.value))
													: setCurrentMax(
															Math.round(currentMin + maxPrice / 100)
													  )
											}
										/>
									</NumbersSlider>
								</CustomSliderBox>

								{/*  */}
							</FiltersBox>
							<TovarList>
								{sorted.length ? (
									sorted.map(tovar => (
										<li key={tovar.id}>
											<TovarCard tovar={tovar}></TovarCard>
										</li>
									))
								) : (
									<EmptyTovarList>
										<p>
											{language === 'uk' ? 'Товар не знайдений' : 'No results'}
										</p>
									</EmptyTovarList>
								)}
							</TovarList>
						</>
					)}
				</Container>
				<Footer />
			</SectionTovars>
		</>
	);
};

export default Product;
