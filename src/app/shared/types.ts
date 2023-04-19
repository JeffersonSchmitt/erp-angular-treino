export type MenuItem = {
  icon: string;
  title: string;
  route: string;
};

export type Customer = {
  address: string;
  cep: string;
  city: string;
  cpfCnpj: string;
  deleted: boolean;
  description: string;
  email: string;
  id: number;
  mobilePhone: string;
  name: string;
  neighborhood: string;
  number: string;
  phone: string;
  selected: boolean;
  state: string;
};

export type Product = {
  brand: string;
  category: string;
  codeBar: string;
  deleted?: boolean;
  description: string;
  id: number;
  imageUrl: string;
  measuringUnit: string;
  name: string;
  price: number;
  quantity: number;
  selected?: boolean;
  supplier: string;
};
