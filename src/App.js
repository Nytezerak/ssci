import React from "react"; 
import Menu from "./components/Menu";
import { Dashboard } from "./components/Dashboard";
import './app.css';
import { Layout } from 'antd';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{padding: 0}} className="Header">
        <Menu />
      </Header>
      <Content>
        <Dashboard />
      </Content>
    </Layout>
  );
}

export default App;
