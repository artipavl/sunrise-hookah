import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectTypes } from '../../redux/types/slice';
import { Link, NavUl, UlItem } from './tovars.style';


type AdminPanelProps = {};

const Tovars: FC<AdminPanelProps> = props => {
    const Types = useAppSelector(selectTypes);

    return (
        <div>
            <NavUl>
                {Types.map(type => <UlItem key={type.id}><Link to={type.en}>{type.ukr}</Link> </UlItem>)}
            </NavUl>
            <Outlet />
        </div>
    );
};

export default Tovars;