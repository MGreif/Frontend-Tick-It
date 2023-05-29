import React, { useState } from 'react'
import { Modal as AntdModal, Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'

interface IGenericModalProps {
  title: string
  content: React.FC<{ setInnerState: any; innerState: any; initialValues: any }>
  actions: [{ label: string; function: (innerstate: any) => void; buttonProps?: ButtonProps }]
  buttonLabel: any
  buttonClass?: any
  buttonProps?: ButtonProps
}

const GenerateModal = (config: IGenericModalProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [innerState, setInnerState] = useState({})

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleClose = () => {
    setIsModalVisible(false)
    setInnerState({})
  }

  const Footer = () => {
    return (
      <React.Fragment>
        <Button onClick={handleClose}>Close</Button>
        {config.actions.map((action) => (
          <Button
            key={action.label}
            onClick={() => {
              action.function(innerState)
              handleClose()
            }}
            {...(action.buttonProps || {})}>
            {action.label}
          </Button>
        ))}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Button
        type="primary"
        onClick={showModal}
        className={config.buttonClass || ''}
        {...(config.buttonProps || {})}>
        {config.buttonLabel}
      </Button>

      <AntdModal
        title={config.title}
        visible={isModalVisible}
        onCancel={handleClose}
        footer={<Footer />}>
        <config.content
          setInnerState={(data: any) => setInnerState(data)}
          innerState={innerState}
          initialValues={innerState}
        />
      </AntdModal>
    </React.Fragment>
  )
}

export default GenerateModal
