import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export const ModalDetalhesItem = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalCadastro = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="text" onClick={showModalCadastro}>
        Cadastrar produto
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some itens...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
