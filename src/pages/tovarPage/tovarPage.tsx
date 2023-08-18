import React, { FC, useState, useEffect } from 'react';
import Heder from '../../components/header/heder';
import { BtnImg, ButtonCase, ContainerTovar, FormBox, Gallery, Img, ImgBox, InfoBox, InputQuantity, MainInfoBox, MiniGallery, MiniGalleryItem, MiniImg, SectionTovar, SubinfoBox } from './tovarPage.style';
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
    const [imgUrl, setImgUrl] = useState(0);

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
            <ContainerTovar>
                <InfoBox>
                    <Gallery>
                        <ImgBox>
                            <Img src={tovar.fotos[imgUrl]} alt="foto hookah" />
                        </ImgBox>
                        <MiniGallery>
                            {tovar?.fotos.map((foto, index) =>
                                <MiniGalleryItem key={foto}>
                                    <BtnImg type='button' onClick={() => setImgUrl(index)}>
                                        <MiniImg src={foto} alt='фото кальяну' />
                                    </BtnImg>
                                </MiniGalleryItem>
                            )}
                        </MiniGallery>
                    </Gallery>
                    <SubinfoBox>
                        <p>{tovar.description.ua}</p>
                        <p>{tovar.parameters.ua}</p>
                    </SubinfoBox>
                </InfoBox>
                <MainInfoBox>
                    <h1>{tovar?.name.ua}</h1>
                    <p>{tovar?.cost}</p>
                    <FormBox>
                        <InputQuantity type='number' min={1} value={1} />
                        <ButtonCase type="submit">Додати в кошик</ButtonCase>
                    </FormBox>
                </MainInfoBox>
            </ContainerTovar>
        </SectionTovar >
    )
}

export default TovarPage;