/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import {
  Form, Input, Button, Checkbox, Row, Col,
} from 'antd';
import { Link } from 'react-router-dom';
import '../components/css/login.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function Login() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row>
        <Col span={7} />
        <Col span={9} className="areaLogin">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Lembre de mim</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Link to="/pedidos">
              <Button type="primary" htmlType="submit">
                Entrar
              </Button>
            </Link>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <a href="#">Esqueci minha senha</a>
          </Form.Item>
        </Col>
        <Col span={8} />
      </Row>
    </Form>

  );
}

export default Login;
