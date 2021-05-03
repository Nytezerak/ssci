/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  Col,
  Form, Input, Row, Select,
} from 'antd';

export function InternoModalCadastroProduto() {
  return (
    <Form
      layout="vertical"
    >
      <Row>
        <Col span={24}>
          <Form.Item required>
            <Input placeholder="Nome do produto" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
          <Form.Item required>
            <Input type="number" placeholder="Valor" />
          </Form.Item>
        </Col>
        <Col span={2} />
        <Col span={11}>
          <Form.Item>
            <Select placeholder="Categoria" required>
              <Select.Option value="pizza">Pizza</Select.Option>
              <Select.Option value="esfiha">Esfiha</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Input.TextArea placeholder="Descrição" />
      </Form.Item>
      <p>Complementos:</p>
    </Form>
  );
}
