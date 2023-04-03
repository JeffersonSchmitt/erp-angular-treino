export type MenuItem = {
  icon: string;
  title: string;
  route: string;
};

export type Cliente = {
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
  selecionado: boolean;
  excluido: boolean;
};
