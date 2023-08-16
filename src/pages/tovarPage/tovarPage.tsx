import React, { FC, useState, useEffect } from 'react';
import { Container } from '../../reuseСomponents/container.style';
import Heder from '../../components/header/heder';
import { SectionTovar } from './tovarPage.style';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectTovars } from '../../redux/tovars/slice';
import axios from 'axios';
import Tovar from '../../Types/tovar';


type TovarPageProps = {};

const TovarPage: FC<TovarPageProps> = (props) => {
    const [tovar, setTovar] = useState<Tovar | null>(null);
    const tovars = useAppSelector(selectTovars);
    const { id } = useParams();

    useEffect(() => {
        const get = async (id: string | undefined, tovars: Tovar[]) => {
            if (id) {
                const tovar = tovars.find(item => item.id === id);
                if (!tovar) {
                    try {
                        const { data } = await axios.get(`/tovar/${id}`);
                        setTovar(data as Tovar) 
                    } catch (error) {
                    }
                }
                tovar && setTovar(tovar) 
            }
        }

        get(id, tovars)
    }, [id, tovars]);

    if (!tovar) {
        return <div>Fuck you</div>
    }

    return (

        <SectionTovar>
            <Heder></Heder>
            <Container>
                {/* <h1>{tovar?.name.ua}</h1> */}
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