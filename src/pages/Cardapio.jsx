/* eslint-disable import/order */
import React from 'react';
import Menu from '../components/Menu';
import '../app.css';
import { Layout } from 'antd';
// eslint-disable-next-line import/no-named-as-default
import DashboardCardapio from '../components/dashboardCardapio';

const { Header, Content } = Layout;

function Cardapio() {
  return (
    <Layout>
      <Header style={{ padding: 0 }} className="Header">
        <Menu />
      </Header>
      <Content>
        <DashboardCardapio />
      </Content>
    </Layout>
  );
}

export default Cardapio;
