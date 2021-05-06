import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { InternoModalEditarProduto } from './InternoModalEditarProduto';

export const ModalEditarItem = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalEditarItem = () => {
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
      <Button type="text" onClick={showModalEditarItem}>
        Editar produto
      </Button>
      <Modal title="Editar produto" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <InternoModalEditarProduto />
      </Modal>
    </>
  );
};
