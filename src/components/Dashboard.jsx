import { Table, Row, Col } from 'antd';
import './css/dashboard.css';
import { DpDwnMostrar } from './DpDownMostrar';
import { DpDwnOrdenar } from './DpDownOrdenar';

const dataSource = [
  {
    key: '1',
    status: 'Aberto',
    table: 1,
    startDate: '23/12/2020 19:25',
    total: 'R$ 20,00',
    id: '#001',
  },
  {
    key: '2',
    status: 'Aberto',
    table: 1,
    startDate: '23/12/2020 19:25',
    total: 'R$ 20,00',
    id: '#001',
  },
  {
    key: '3',
    status: 'Aberto',
    table: 1,
    startDate: '23/12/2020 19:25',
    total: 'R$ 20,00',
    id: '#001',
  },
  {
    key: '4',
    status: 'Aberto',
    table: 1,
    startDate: '23/12/2020 19:25',
    total: 'R$ 20,00',
    id: '#001',
  },
  {
    key: '5',
    status: 'Aberto',
    table: 1,
    startDate: '23/12/2020 19:25',
    total: 'R$ 20,00',
    id: '#001',
  },
  {
    key: '6',
    status: 'Aberto',
    table: 1,
    startDate: '23/12/2020 19:25',
    total: 'R$ 20,00',
    id: '#001',
  },
  {
    key: '7',
    status: 'Aberto',
    table: 1,
    startDate: '23/12/2020 19:25',
    total: 'R$ 20,00',
    id: '#001',
  },
  {
    key: '8',
    status: 'Aberto',
    table: 1,
    startDate: '23/12/2020 19:25',
    total: 'R$ 20,00',
    id: '#001',
  }, {
    key: '9',
    status: 'Aberto',
    table: 1,
    startDate: '23/12/2020 19:25',
    total: 'R$ 20,00',
    id: '#001',
  },

];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Mesa',
    dataIndex: 'table',
    key: 'table',
  },
  {
    title: 'Entrada',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
];

export function Dashboard() {
  return (
    <section>
      <Row>
        <Col span={2} />
        <Col span={20} className="dpDwnMenu">
          <Row className="dpDwnText">
            <Col span={4}>
              <text>Mostrar:</text>
            </Col>

            <Col span={4}>
              <text>Ordenar Por:</text>
            </Col>
          </Row>

          <Row>
            <Col span={4}>
              <DpDwnMostrar />
            </Col>

            <Col span={4}>
              <DpDwnOrdenar />
            </Col>
          </Row>
        </Col>

        <Col span={2} />
      </Row>
      <Row id="dashRow">
        <Col span={2} />

        <Col span={20}>
          <Table
            pagination={{ pageSize: 7 }}
            dataSource={dataSource}
            columns={columns}
          />
        </Col>

        <Col span={2} />
      </Row>
    </section>
  );
}

export default Dashboard;
