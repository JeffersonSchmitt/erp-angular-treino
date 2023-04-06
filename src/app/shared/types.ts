export type MenuItem = {
  icon: string;
  title: string;
  route: string;
};

export type Customer = {
  id: number;
  name: string;
  cpfCnpj: string;
  email: string;
  cep: string;
  address: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  phone: string;
  mobilePhone: string;
  description: string;
  selected: boolean;
  deleted: boolean;
};
