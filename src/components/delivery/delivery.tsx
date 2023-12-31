import axios from 'axios';
import React, { FC, useState, useEffect } from 'react';
import {
	Address,
	SearchSettlementsType,
	Warehous,
} from '../../Types/novaposhta';
import {
	Box,
	Input,
	Item,
	Lable,
	List,
	WarehousesItem,
	WarehousesList,
} from './delivery.style';
import { selectLanguage } from '../../redux/language/languageSelectors';
import { useAppSelector } from '../../hooks';

type DeliveryProps = {
	submit: (values: Warehous) => void;
};

const Delivery: FC<DeliveryProps> = ({ submit }) => {
	const [towns, setTowns] = useState<SearchSettlementsType>({
		TotalCount: 0,
		Addresses: [],
	});
	const [town, setTown] = useState<string>('');
	const [curentAdress, setCurentAdress] = useState<Address>();

	const [warehouses, setWarehouses] = useState<Warehous[]>();
	const [warehouseNumber, setWarehouseNumber] = useState<number>(0);

	const language = useAppSelector(selectLanguage);

	useEffect(() => {
		async function getTowns() {
			const res = await axios.post(
				'https://sunrise-hookah-api.onrender.com/novaposhta/searchSettlements',
				{
					Page: 1,
					CityName: town,
					Limit: 5,
				}
			);
			if (res.data.data[0]) {
				setTowns(res.data.data[0] as SearchSettlementsType);
			}
		}

		if (town !== curentAdress?.Present && town !== '') {
			getTowns();
		}
	}, [curentAdress?.Present, town]);

	useEffect(() => {
		async function getWarehouses(curentAdress: Address) {
			const params = {
				Page: 1,
				CityName: curentAdress.MainDescription,
				Limit: 5,
				CityRef: curentAdress.DeliveryCity,
			};
			const res = await axios.post(
				'https://sunrise-hookah-api.onrender.com/novaposhta/getWarehouses',
				warehouseNumber > 0
					? { ...params, WarehouseId: warehouseNumber }
					: { ...params }
			);
			if (res.data.data) {
				setWarehouses(res.data.data);
			}
		}
		if (curentAdress) {
			getWarehouses(curentAdress);
		}
	}, [curentAdress, warehouseNumber]);
	return (
		<>
			<Box>
				<Lable>
				{language==="uk" ? "Місто" : "City"}
					<Input
						type="text"
						value={town}
						onChange={e => setTown(e.target.value)}
						placeholder={'Київ'}
					/>
					{towns.TotalCount > 0 && town !== curentAdress?.Present && (
						<List>
							{towns.Addresses.map(address => (
								<Item
									key={address.Ref}
									onClick={() => {
										setCurentAdress(address);
										setTown(address.Present);
										console.log(address);
									}}
								>
									{address.Present}
								</Item>
							))}
						</List>
					)}
				</Lable>
        <Lable>
		{language==="uk" ? "№ Відділення" : "Department №"}
					<Input
						type="number"
						value={warehouseNumber}
						min={0}
						onChange={e => setWarehouseNumber(Number(e.target.value))}
					/>
				</Lable>
			</Box>
			<WarehousesList>
				{warehouses &&
					warehouses.map(warehous => (
						<WarehousesItem
							key={warehous.Number}
							onClick={() => submit(warehous)}
						>
							{warehous.Description}
						</WarehousesItem>
					))}
			</WarehousesList>
		</>
	);
};

export default Delivery;
