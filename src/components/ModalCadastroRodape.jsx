import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'antd';
import './css/dashboard.css';

const dataSource = [
  {
    key: '1',
    id: '#001',
    type: 'Aberto',
    value: 'R$ 20,00',
  },
  {
    key: '2',
    id: '#001',
    type: 'Aberto',
    value: 'R$ 20,00',
  },
  {
    key: '3',
    id: '#001',
    type: 'Aberto',
    value: 'R$ 20,00',
  },

];

const columns = [
  {
    dataIndex: 'id',
    key: 'id',
  },
  {
    dataIndex: 'type',
    key: 'type',
  },
  {
    dataIndex: 'value',
    key: 'value',
  },
  {
    dataIndex: '',
    render: () => (<p><FontAwesomeIcon icon={faPlus} /></p>),
    key: 'edit',
  },
];

export function ModalCadastroRodape() {
  return (
    <section>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        showHeader={false}
      />
    </section>
  );
}

export default ModalCadastroRodape;
