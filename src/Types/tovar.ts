interface TwoLeng {
  ua: string;
  en: string;
}

type Tovar = {
  id: string;
  name: TwoLeng;
  cost: number;
  description: TwoLeng;
  parameters: TwoLeng;
  completeSet: TwoLeng;
  quantity: number;
  popularity: number;
  type: string;
  fotos: string[];
};
export type AddTovar = {
  name: TwoLeng;
  cost: number;
  description: TwoLeng;
  parameters: TwoLeng;
  completeSet: TwoLeng;
  quantity: number;
  popularity: number;
  type: string;
  fotos: string[];
};

export type TovarBasket = Tovar & {
  baskeQuantity: number;
};

export default Tovar;
