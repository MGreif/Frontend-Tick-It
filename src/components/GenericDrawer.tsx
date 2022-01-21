import React, { useState } from 'react'
import { Button, Drawer, Divider } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import classes from './GenericDrawer.module.css'

export interface IGenericDrawerProps {
  title: string
  content: React.FC<{ setInnerState: any; innerState: any; initialValues: any }>
  actions: [{ label: string; function: Function; buttonProps?: ButtonProps }]
  buttonLabel: any
  buttonClass?: any
  buttonProps?: ButtonProps
}

const GenericDrawer = (config: IGenericDrawerProps) => {
  const [visible, setVisibility] = useState(false)
  const [innerState, setInnerState] = useState({})

  const showDrawer = () => {
    setVisibility(true)
  }

  const handleClose = () => {
    setVisibility(false)
    setInnerState({})
  }

  const Header = () => {
    return (
      <React.Fragment>
        <div className={classes.headerContainer}>
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
        </div>
        <Divider />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Button
        type="primary"
        onClick={showDrawer}
        className={config.buttonClass || ''}
        {...(config.buttonProps || {})}>
        {config.buttonLabel}
      </Button>
      <Drawer title={config.title} placement="right" onClose={handleClose} visible={visible}>
        <Header />
        <config.content
          setInnerState={(data: any) => setInnerState(data)}
          innerState={innerState}
          initialValues={innerState}
        />
      </Drawer>
    </React.Fragment>
  )
}

export default GenericDrawer
