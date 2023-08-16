import React, { FC, useMemo } from 'react';
import { Container } from '../../reuseСomponents/container.style';
import Heder from '../../components/header/heder';
import { SectionTovar } from './tovarPage.style';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectTovars } from '../../redux/tovars/slice';

type TovarPageProps = {};

const TovarPage: FC<TovarPageProps> = (props) => {
    const { id } = useParams();
    console.log(id)

    const tovars = useAppSelector(selectTovars);
    
    const tovar = useMemo(() => {
        if (id) {
            return tovars.find(item => item.id === id)
        }
    }, [id, tovars])
    console.log(tovar)

    if (!tovar) {
        return <div>Fuch you</div>
    }
    return (
        
        <SectionTovar>
            <Heder></Heder>
            <Container>
                <h1>{tovar?.name.ua}</h1>
                <p></p>
                <form>
                    <input type='number' />
                    <button type="submit"></button>
                </form>
            </Container>
        </SectionTovar >
    )
}

export default TovarPage;