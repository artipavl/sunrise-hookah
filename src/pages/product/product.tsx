import React, { FC, useEffect, useMemo, useState } from 'react';
import { Container } from '../../reuseСomponents/container.style';
import {
	CustomSliderBox,
	FieldInput,
	FiltersBox,
	InputRadio,
	ItemOpt,
	NumbersLine,
	NumbersSlider,
	ProgressBar,
	SectionTovars,
	SliderBar,
	SortCustomBtn,
	SortingBtn,
	TextSpan,
	Title,
	TovarList,
} from './product.style';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectTovars, selectTovarsLoading } from '../../redux/tovars/slice';
import { fetchTovarsByTypes } from '../../redux/tovars/tovarsOperations';
import { selectTypes } from '../../redux/types/slice';
import Heder from '../../components/header/heder';
import Tovar from '../../Types/tovar';
import TovarCard from '../../components/tovar/tovar';
import sortArrByKey from '../../helpers/sortArrByKey';
import Footer from '../../components/footer/footer';

type ProductProps = {};
interface sortingParamsTypes {
	name: string;
	sortableParam: keyof Tovar;
	sortBy: boolean;
}
const sortingParams: sortingParamsTypes[] = [
	{
		name: 'популярні',
		sortableParam: 'popularity',
		sortBy: true,
	},
	{
		name: 'спочатку дешеві',
		sortableParam: 'cost',
		sortBy: true,
	},
	{
		name: 'спочатку дорожчі',
		sortableParam: 'cost',
		sortBy: false,
	},
	{
		name: 'за алфавітом',
		sortableParam: 'nameUKR',
		sortBy: true,
	},
	{
		name: 'проти алфавіта',
		sortableParam: 'nameUKR',
		sortBy: false,
	},
];

const Product: FC<ProductProps> = () => {
	const [isOpenSort, setIsOpenSort] = useState<boolean>(false);
	const [sortParams, setSortParams] = useState<number>(0);
	const [minPrice, setMinPrice] = useState<number>(1);
	const [maxPrice, setMaxPrice] = useState<number>(10000);

	const params = useParams();

	const types = useAppSelector(selectTypes);
	const start = useAppSelector(selectTovarsLoading);

	const type = types.find(type => type.en === params.id?.toLowerCase());
	const AppDispatch = useAppDispatch();

	const tovars = useAppSelector(selectTovars);

	useEffect(() => {
		if (type?.en) {
			AppDispatch(fetchTovarsByTypes(type.en));
		}
	}, [AppDispatch, type]);

	const sorted = useMemo(() => {
		return sortArrByKey(
			tovars,
			sortingParams[sortParams].sortableParam,
			sortingParams[sortParams].sortBy
		);
	}, [sortParams, tovars]);

	useMemo(() => {
		const data = sortArrByKey(tovars, sortingParams[2].sortableParam, true);
		setMinPrice(data[0]?.cost);
		setMaxPrice(data[tovars.length - 1]?.cost);
		// console.log(minPrice);
		// console.log(maxPrice);

		return data;
	}, [tovars]);

	// console.log(sortedByPrice);

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
					<Title>{type.ukr}</Title>
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
										}}
									>
										Очистити фільтр
									</SortingBtn>
									<form>
										<SortingBtn
											type="button"
											onClick={() => setIsOpenSort(!isOpenSort)}
										>
											{sortingParams[sortParams].name}
										</SortingBtn>
										{sortingParams.map((param, index) => (
											<ItemOpt key={param.name} index={index} h={isOpenSort}>
												{param.name}
												<InputRadio
													name="sort"
													type="radio"
													value={index}
													onChange={() => {
														setSortParams(index);
														setIsOpenSort(false);
													}}
												/>
											</ItemOpt>
										))}
									</form>
								</SortCustomBtn>
								<CustomSliderBox>
									<NumbersLine>
										<NumbersSlider>
											<TextSpan>Min</TextSpan>
											<FieldInput
												type="number"
												name="min"
												id="minValue"
												min={minPrice}
												max={maxPrice}
												value={minPrice}
												onChange={e =>
													setMinPrice(Number(e.currentTarget.value))
												}
											/>
										</NumbersSlider>
										<NumbersSlider>
											<TextSpan>Max</TextSpan>
											<FieldInput
												type="number"
												name="max"
												id="maxValue"
												min={minPrice}
												max={maxPrice}
												value={maxPrice}
												onChange={e =>
													setMaxPrice(Number(e.currentTarget.value))
												}
											/>
										</NumbersSlider>
									</NumbersLine>

									<SliderBar>
										<ProgressBar></ProgressBar>
									</SliderBar>
								</CustomSliderBox>
							</FiltersBox>
							<TovarList>
								{sorted.map(tovar => (
									<li key={tovar.id}>
										<TovarCard tovar={tovar}></TovarCard>
									</li>
								))}
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
