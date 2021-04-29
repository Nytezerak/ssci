import {
  Button, Row, Col, Space,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Row>
      <Col span={2} />

      <Col span={20}>
        <Space size="middle">

          <Link to="/Pedidos">
            <Button shape="round">
              Pedidos
            </Button>
          </Link>

          <Link to="/cardapio">
            <Button shape="round">
              Cardápio
            </Button>
          </Link>

          <Button shape="round">
            <FontAwesomeIcon icon={faChartLine} />
          </Button>

        </Space>
      </Col>

      <Col span={2} />
    </Row>
  );
}

export default Menu;
