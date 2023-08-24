import React, { FC, useEffect, useState } from 'react';
import { Container } from '../../reuseСomponents/container.style';
import { SectionTovars, Title, TovarList } from './product.style';
// import Tovar from '../../components/tovar/tovar';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectTovars, selectTovarsLoading } from '../../redux/tovars/slice';
import { fetchTovarsByTypes } from '../../redux/tovars/tovarsOperations';
import { selectTypes } from '../../redux/types/slice';
import Heder from '../../components/header/heder';
import Tovar from '../../components/tovar/tovar';
import { Link } from 'react-router-dom';
import Modal from '../../components/modal/modal';
import Filter from '../../components/filter/filter';

type ProductProps = {};

const Product: FC<ProductProps> = () => {
	const params = useParams();
  const [openFilter, setOpenFilter] = useState(false);

	const types = useAppSelector(selectTypes);
	const start = useAppSelector(selectTovarsLoading);

	const type = types.find(type => type.eu === params.id?.toLowerCase());
	const AppDispatch = useAppDispatch();

	const tovars = useAppSelector(selectTovars);

	useEffect(() => {
		if (type?.eu) {
			AppDispatch(fetchTovarsByTypes(type.eu));
		}
	}, [AppDispatch, type]);

	if (!type) {
		return <Navigate to="/"></Navigate>;
	}

  // document.body.style.overflow = 'hidden';
  

	return (
		<>
			<SectionTovars>
				<Heder></Heder>
				<Container>
					<Title>{type.ua}</Title>
					{!start ? (
						<p>loading...</p>
					) : (
						<>
							<button type="button" onClick={() => setOpenFilter(true) } style={{color: 'white'}} >Filter</button>
							<TovarList>
								{tovars.map(tovar => (
									<li key={tovar.id}>
										<Link to={`/tovarPage/${tovar.id}`}>
											<Tovar tovar={tovar}></Tovar>
										</Link>
									</li>
								))}
							</TovarList>
						</>
					)}
				</Container>
			</SectionTovars>
			{openFilter && (
				<Modal openBasket={() => setOpenFilter(false)}>
					<Filter ></Filter>
				</Modal>
			)}
		</>
	);
};

export default Product;
