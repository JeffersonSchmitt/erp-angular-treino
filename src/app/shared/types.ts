import { type } from 'jquery';

export type MenuItem = {
  icon: string;
  title: string;
  route: string;
};

export type Sales = {
  customer: Customer;
  products: Product[];
  payment: Payment;
  total: number;
};

export type Payment = {
  name: string;
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
  typeCustomer: string;
};

export type Product = {
  brand: string;
  category: string;
  codeBar: string;
  cost: number;
  deleted?: boolean;
  description: string;
  id: number;
  imageUrl: string;
  measuringUnit: string;
  minQuantity: number;
  name: string;
  price: number;
  quantity: number;
  selected?: boolean;
  supplier: string;
};

export type ViaCep = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};
