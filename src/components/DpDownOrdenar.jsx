import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export function DpDwnOrdenar(){
    return(
      <>
        <Select defaultValue="mesa" style={{ width: 150 }} onChange={handleChange}>
        <Option value="pedido">Últimos pedidos</Option>
        <Option value="mesa">Mesa</Option>
        <Option value="status">Status</Option>
        </Select>
    </>
    )
};

