import React, { FC, useEffect, useMemo, useState } from 'react';
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
interface sortingParamsTypes {
	name: string;
	sortableParam: keyof Tovar;
	sortBy: boolean;
}
const sortingParams: sortingParamsTypes[] = [
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
		name: 'популярні',
		sortableParam: 'popularity',
		sortBy: true,
	},
];

const Product: FC<ProductProps> = () => {
	const [isOpenSort, setIsOpenSort] = useState<boolean>(false);
	const [sortParams, setSortParams] = useState<number>(0);

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
		return sortByKey(
			tovars,
			sortingParams[sortParams].sortableParam,
			sortingParams[sortParams].sortBy
		);
	}, [sortParams, tovars]);

	if (!type) {
		return <Navigate to="/"></Navigate>;
	}

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
										{sortingParams.map((param, index) => (
											<SortItem key={param.name}>
												<ButtonSort
													type="button"
													onClick={() => {
														setIsOpenSort(false);
														setSortParams(index);
													}}
												>
													{param.name}
												</ButtonSort>
											</SortItem>
										))}
									</SortList>
								</SortCustomBtn>
							</FiltersBox>
							<TovarList>
								{sorted.map(tovar => (
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
