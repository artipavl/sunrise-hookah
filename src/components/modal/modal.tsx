import React, { FC } from 'react';

import { createPortal } from 'react-dom';
import { ModalSection } from './modal.style';

const portal = document.getElementById('portal') as HTMLElement;

type ModalProps = {
	openBasket: () => void;
	children: JSX.Element;
};

const Modal: FC<ModalProps> = ({ openBasket, children: Component }) => {
	return createPortal(
		<ModalSection onClick={e => e.target === e.currentTarget && openBasket()}>
			{Component}
		</ModalSection>,
		portal
	);
};

export default Modal;
