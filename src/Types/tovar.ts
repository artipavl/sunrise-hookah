type Tovar = {
	id: string;
	nameUKR: string;
	nameEN: string;
	cost: number;
	descriptionUKR: string;
	descriptionEN: string;
	parametersUKR: string;
	parametersEN: string;
	completeSetUKR: string;
	completeSetEN: string;
	quantity: number;
	popularity: number;
	type: string;
	fotos: string[];
};

export type AddTovar = {
	nameUKR: string;
	nameEN: string;
	cost: number;
	descriptionUKR: string;
	descriptionEN: string;
	parametersUKR: string;
	parametersEN: string;
	completeSetUKR: string;
	completeSetEN: string;
	quantity: number;
	popularity: number;
	type: string;
	fotos: string[];
};

export type TovarBasket = Tovar & {
	baskeQuantity: number;
};

export default Tovar;
