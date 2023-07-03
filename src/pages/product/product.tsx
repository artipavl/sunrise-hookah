import React, { FC } from 'react';
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';
import { Title, TovarItem, TovarList } from './product.style';
import Tovar from '../../components/tovar/tovar';

type ProductProps = {
  title: string;
};

const Product: FC<ProductProps> = ({ title }) => {
  return (
    <Section>
      <Container>
        <Title>{title}</Title>
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
      </Container>
    </Section>
  );
};

export default Product;
