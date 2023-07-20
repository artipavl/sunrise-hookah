import React, { FC, useEffect} from 'react';
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';
import { Title, TovarItem, TovarList } from './product.style';
import Tovar from '../../components/tovar/tovar';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  selectTovarsLoading,
} from '../../redux/tovars/slice';
import { fetchTovarsByTypes } from '../../redux/tovars/tovarsOperations';
import { selectTypes } from '../../redux/types/slice';

type ProductProps = {};

const Product: FC<ProductProps> = () => {
  // const [start, setStart] = useState<boolean>(false);
  const params = useParams();

  const types = useAppSelector(selectTypes);
  const start = useAppSelector(selectTovarsLoading);

  const type = types.find(type => type.eu === params.id?.toLowerCase());
  const AppDispatch = useAppDispatch();

  useEffect(() => {
    if (type?.eu) {
      AppDispatch(fetchTovarsByTypes(type.eu));
    }
  }, [AppDispatch, type]);

  if (!type) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <Section>
      <Container>
        <Title>{type.ua}</Title>
        {!start ? (
          <p>loading...</p>
        ) : (
          <TovarList>
            <TovarItem>
              <Tovar />
            </TovarItem>
            <TovarItem>
              <Tovar />
            </TovarItem>
            <TovarItem>
              <Tovar />
            </TovarItem>
            <TovarItem>
              <Tovar />
            </TovarItem>
            <TovarItem>
              <Tovar />
            </TovarItem>
            <TovarItem>
              <Tovar />
            </TovarItem>
            <TovarItem>
              <Tovar />
            </TovarItem>
            <TovarItem>
              <Tovar />
            </TovarItem>
            <TovarItem>
              <Tovar />
            </TovarItem>
            <TovarItem>
              <Tovar />
            </TovarItem>
          </TovarList>
        )}
      </Container>
    </Section>
  );
};

export default Product;
