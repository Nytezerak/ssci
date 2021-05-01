import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';

export const ModalCadastroCategoria = () => {
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
      <Button type="primary" shape="round" onClick={showModalCadastro}>
        Categorias
      </Button>
      <Modal title="Adicionar categoria" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>
          <Input placeholder="Insira o nome da categoria aqui" />
        </p>
      </Modal>
    </>
  );
};
