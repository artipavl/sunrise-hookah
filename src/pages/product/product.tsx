import React, { FC, useEffect, useState } from 'react';
import { Container } from '../../reuseСomponents/container.style';
import {
	ButtonSort,
	FiltersBox,
	SectionTovars,
	SortCustomBtn,
	SortItem,
	SortList,
	SortingBtn,
	Title,
	TovarList,
} from './product.style';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectTovars, selectTovarsLoading } from '../../redux/tovars/slice';
import { fetchTovarsByTypes } from '../../redux/tovars/tovarsOperations';
import { selectTypes } from '../../redux/types/slice';
import Heder from '../../components/header/heder';
import { Link } from 'react-router-dom';
import Tovar from '../../Types/tovar';
import TovarCard from '../../components/tovar/tovar';

type ProductProps = {};

const Product: FC<ProductProps> = () => {
	const [isOpenSort, setIsOpenSort] = useState<boolean>(false);

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

	if (!type) {
		return <Navigate to="/"></Navigate>;
	}

	const sortingParams = [
		{
			name: 'за алфавітом',
			sortableParam: '',
			sortBy: 'a-z',
		},
		{
			name: 'проти алфавіта',
			sortableParam: '',
			sortBy: 'z-a',
		},
		{
			name: 'спочатку дешеві',
			sortableParam: '',
			sortBy: '<',
		},
		{
			name: 'спочатку дорожчі',
			sortableParam: '',
			sortBy: '>',
		},
		{
			name: 'найновіші',
			sortableParam: '',
			sortBy: '?',
		},
	]; 
	function sortByKey<T extends Tovar, K extends keyof T>(
		arr: T[],
		key: K,
		filter: boolean
	): T[] {
		return arr.slice().sort((a, b) => {
			if (filter) {
				if (a[key] < b[key]) {
					return -1;
				}
				if (a[key] > b[key]) {
					return 1;
				}
			} else {
				if (a[key] < b[key]) {
					return 1;
				}
				if (a[key] > b[key]) {
					return -1;
				}
			}

			return 0;
		});
	}
	console.log(tovars)
	const sorted =	sortByKey(tovars, `nameEN`, false)
	console.log(sorted)

	return (
		<>
			<SectionTovars>
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
										onClick={() => setIsOpenSort(!isOpenSort)}
									>
										сортувати за
									</SortingBtn>
									<SortList h={isOpenSort}>
										{sortingParams.map(param => (
											<SortItem key={param.name}>
												<ButtonSort type="button">{param.name}</ButtonSort>
											</SortItem>
										))}
									</SortList>
								</SortCustomBtn>
							</FiltersBox>
							<TovarList>
								{tovars.map(tovar => (
									<li key={tovar.id}>
										<Link to={`/tovarPage/${tovar.id}`}>
											<TovarCard tovar={tovar}></TovarCard>
										</Link>
									</li>
								))}
							</TovarList>
						</>
					)}
				</Container>
			</SectionTovars>
		</>
	);
};

export default Product;
