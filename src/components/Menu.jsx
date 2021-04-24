import { Button, Row, Col, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

function Menu(){
  return(
    <Row>
      <Col span={2}>
      </Col>

      <Col span={20}>
        <Space size='middle'>
          <Button shape="round">
            Pedidos
          </Button>
          <Button shape="round">
            Cardápio
          </Button>
          <Button shape="round">
            <FontAwesomeIcon icon={faChartLine} />
          </Button>
        </Space>
      </Col>

      <Col span={2}>
      </Col>
    </Row>
  )
}

export default Menu;