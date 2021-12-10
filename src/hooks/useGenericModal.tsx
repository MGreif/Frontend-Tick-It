import React, { useState } from 'react'
import { Modal as AntdModal, Button } from 'antd';

interface IGenericModalConfig {

}

const useGenerateModal = (config: IGenericModalConfig) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true)
  };

  const handleOk = () => {
    setIsModalVisible(false)
  };

  const handleCancel = () => {
    setIsModalVisible(false)
  };

  const ModalButton = () => <Button type="primary" onClick={showModal}>
    Open Modal
  </Button>

  const Modal = () => <AntdModal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </AntdModal>

  return { Modal, ModalButton }
}

export default { useGenerateModal }