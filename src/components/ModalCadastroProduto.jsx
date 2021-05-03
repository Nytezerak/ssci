import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { InternoModalCadastroProduto } from './InternoModalCadastroProduto';

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
      <Modal title="Cadastrar produto" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <InternoModalCadastroProduto />
      </Modal>
    </>
  );
};
