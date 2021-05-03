import {
  Row, Col,
} from 'antd';
import './css/dashboard.css';
import { DpDownOrdemCardapio } from './DpDownOrdemCardapio';
import { ModalCadastroCategoria } from './ModalCadastroCategoria';
import { DpDownEditarProduto } from './DpDownEditarProduto';
import { DashCardapio } from './DashCardapio';

export function DashboardCardapio() {
  return (
    <section>
      <Row>
        <Col span={2} />

        <Col span={20} className="dpDwnMenu">
          <Row className="dpDwnText">
            <Col span={4}>
              <text>Mostrar:</text>
            </Col>

            <Col span={4} />
          </Row>

          <Row>
            <Col span={4}>
              <DpDownOrdemCardapio />
            </Col>

            <Col span={14} />

            <Col span={2}>
              <ModalCadastroCategoria />
            </Col>

            <Col span={1} />

            <Col span={2}>
              <DpDownEditarProduto />
            </Col>

            <Col span={1} />
          </Row>

        </Col>

        <Col span={2} />
      </Row>
      <Row id="dashRow">
        <Col span={2} />

        <Col span={20}>
          <DashCardapio />
        </Col>

        <Col span={2} />
      </Row>
    </section>
  );
}

export default DashboardCardapio;
