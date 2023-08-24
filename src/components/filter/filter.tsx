import React, { FC } from 'react';
import { MainFilter } from './filter.style';

type FilterProps = {
	model?: string | null;
};

const Filter: FC<FilterProps> = props => {
	return (
		<MainFilter >
			<h2>Filter</h2>
			<button type="button">close</button>
			<div>
				<p>Model</p>
				<ul></ul>
			</div>
		</MainFilter>
	);
};

export default Filter;
