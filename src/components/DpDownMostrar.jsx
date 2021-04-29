import { Select } from 'antd';

const { Option } = Select;

function mostrarPor(value) {
  // eslint-disable-next-line no-console
  console.log(`selected ${value}`);
}

export function DpDwnMostrar() {
  return (
    <>
      <Select defaultValue="hoje" style={{ width: 140 }} onChange={mostrarPor}>
        <Option value="hoje">Hoje</Option>
        <Option value="ontem">Ontem</Option>
        <Option value="semana">Última semana</Option>
      </Select>
    </>
  );
}
