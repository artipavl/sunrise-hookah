import React, { FC, useEffect } from 'react';
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

type ProductProps = {};

const Product: FC<ProductProps> = () => {
  const params = useParams();

  const types = useAppSelector(selectTypes);
  const start = useAppSelector(selectTovarsLoading);

  const type = types.find(type => type.eu === params.id?.toLowerCase());
  const AppDispatch = useAppDispatch();

  const tovars = useAppSelector(selectTovars)

  useEffect(() => {
    if (type?.eu) {
      AppDispatch(fetchTovarsByTypes(type.eu));
    }
  }, [AppDispatch, type]);

  if (!type) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <>
      <SectionTovars>
        <Heder></Heder>
        <Container>
          <Title>{type.ua}</Title>
          {!start ? (
            <p>loading...</p>
          ) : (
            <TovarList>
              {tovars.map((tovar) =>
                <li key={tovar.id}>
                  <Link to={`/tovarPage/${tovar.id}`}>
                    <Tovar tovar={tovar}></Tovar>
                  </Link>
                </li>
              )}
            </TovarList>
          )}
        </Container>
      </SectionTovars>
    </>
  );
};

export default Product;
