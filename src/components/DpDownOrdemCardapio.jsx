import { Select } from 'antd';

const { Option } = Select;

function mostrarCardapio(value) {
  // eslint-disable-next-line no-console
  console.log(`selected ${value}`);
}

export function DpDownOrdemCardapio() {
  return (
    <>
      <Select defaultValue="nome" style={{ width: 140 }} onChange={mostrarCardapio}>
        <Option value="nome">Nome</Option>
        <Option value="categoria">Categoria</Option>
        <Option value="valor">Valor</Option>
      </Select>
    </>
  );
}
