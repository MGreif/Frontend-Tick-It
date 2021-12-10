import React, { useState } from 'react'
import { Modal as AntdModal, Button } from 'antd';

interface IGenericModalProps {
  title: string,
  content: React.FC<{ setInnerState: any, innerState: any }>,
  actions: [{ label: string, function: Function, buttonProps?: any }],
  buttonLabel: string,
  buttonClass?: any
}

const GenerateModal = (config: IGenericModalProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [innerState, setInnerState] = useState({})
  const showModal = () => {
    setIsModalVisible(true)
  };

  const handleClose = () => {
    setIsModalVisible(false)
  };

  const Footer = () => {
    return <React.Fragment>
      {
        config.actions.map(action => <Button key={action.label} onClick={() => { action.function(innerState, handleClose)}}>{action.label}</Button>)
      }
      <Button onClick={handleClose}>Close</Button>
    </React.Fragment>
  }

  return <React.Fragment>
    <Button type="primary" onClick={showModal} className={config.buttonClass || ''}>
      {config.buttonLabel}
    </Button>

    <AntdModal title={config.title} visible={isModalVisible} onCancel={handleClose} footer={<Footer />} >
      <config.content setInnerState={(data: any) => setInnerState({ ...innerState, ...data })} innerState={innerState}/>
    </AntdModal>
  </React.Fragment>
}

export default GenerateModal