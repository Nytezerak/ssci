import {
  Menu, Dropdown, Button, Space,
} from 'antd';
import { ModalDetalhesItem } from './ModalCadastroProduto';
import { ModalEditarItem } from './ModalEditarProduto';

const menu = (
  <Menu>
    <Menu.Item>
      <p>
        <ModalDetalhesItem />
      </p>
    </Menu.Item>
    <Menu.Item>
      <p>
        <ModalEditarItem />
      </p>
    </Menu.Item>
  </Menu>
);

export function DpDownEditarProduto() {
  return (
    <Space>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button type="primary" shape="round">Produtos</Button>
      </Dropdown>
    </Space>
  );
}
