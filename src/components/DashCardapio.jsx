/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, {
  useContext, useState, useEffect, useRef,
} from 'react';
import {
  Table, Input, Button, Popconfirm, Form,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

EditableRow.propTypes = {
  index: PropTypes.number.isRequired,
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
        onKeyPress={toggleEdit}
        role="button"
        tabIndex={0}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};
EditableCell.propTypes = {
  title: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  dataIndex: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  record: PropTypes.any.isRequired,
  handleSave: PropTypes.func.isRequired,
};
export class DashCardapio extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: '10%',
      },
      {
        title: 'Produto',
        dataIndex: 'product',
        id: 'product',
        width: '40%',
        editable: true,
      },
      {
        title: 'Categoria',
        dataIndex: 'category',
        id: 'category',
        width: '20%',
      },
      {
        title: 'Valor',
        dataIndex: 'value',
        key: 'value',
      },
      {
        title: '  ',
        dataIndex: 'operation',
        render: (_, record) => (this.state.dataSource.length >= 1 ? (
          <Popconfirm title="Confirma deletar?" onConfirm={() => this.handleDelete(record.key)}>
            <span><FontAwesomeIcon icon={faTrash} /></span>
          </Popconfirm>
        ) : null),
        width: '5%',
      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          id: '#001',
          product: 'Pizza de frango c/ catupiry',
          category: 'Pizza',
          value: 'R$ 30,00',
        },
      ],
      count: 2,
    };
  }

  handleDelete(key) {
    this.setState((prev) => ({
      dataSource: prev.dataSource.filter((item) => item.key !== key),
    }));
  }

  handleAdd() {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      id: `#00${count}`,
      product: 'Pizza de frango c/ catupiry',
      category: 'Pizza',
      value: 'R$ 30,00',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  handleSave(row) {
    this.setState((prev) => {
      const newData = [...prev.dataSource];
      const index = newData.findIndex((item) => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...row });
      return {
        dataSource: newData,
      };
    });
  }

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}
