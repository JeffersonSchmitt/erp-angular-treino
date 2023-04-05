export type MenuItem = {
  icon: string;
  title: string;
  route: string;
};

export type Customer = {
  id: number;
  nome: string;
  cpfCnpj: string;
  email: string;
  cep: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  celular: string;
  descricao: string;
  selected: boolean;
  deleted: boolean;
};
