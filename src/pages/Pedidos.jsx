import React from 'react';
import { Layout } from 'antd';
import Menu from '../components/Menu';
import { Dashboard } from '../components/Dashboard';

const { Header, Content } = Layout;

function Pedidos() {
  return (
    <Layout>
      <Header style={{ padding: 0 }} className="Header">
        <Menu />
      </Header>
      <Content>
        <Dashboard />
      </Content>
    </Layout>
  );
}

export default Pedidos;
