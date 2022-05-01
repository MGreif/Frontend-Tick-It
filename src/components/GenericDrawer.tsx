import React, { createRef, useImperativeHandle, useState } from 'react'
import { Button, Drawer, Divider } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import classes from './GenericDrawer.module.css'

export interface IGenericDrawerProps {
  title: string
  content: React.FC<{ setInnerState: any; innerState: any; initialValues: any }>
  actions: { label: string; function: Function; buttonProps?: ButtonProps }[]
  buttonLabel?: any
  buttonClass?: any
  buttonProps?: ButtonProps
}

const GenericDrawer: React.FC<IGenericDrawerProps & { ref: any }> =
  React.forwardRef((config, ref) => {
    const [visible, setVisibility] = useState(false)
    const [innerState, setInnerState] = useState({})

    useImperativeHandle(ref, () => ({
      toggleVisibility: (value: boolean) => {
        setVisibility(value)
      },
      getVisibility: () => visible,
    }))

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
                {...(action.buttonProps || {})}
              >
                {action.label}
              </Button>
            ))}
          </div>
          <Divider />
        </React.Fragment>
      )
    }
    return (
      <Drawer
        title={config.title}
        placement="right"
        onClose={handleClose}
        visible={visible}
      >
        <Header />
        <config.content
          setInnerState={(data: any) => setInnerState(data)}
          innerState={innerState}
          initialValues={innerState}
        />
      </Drawer>
    )
  })

const ButtonDrawer = (config: IGenericDrawerProps) => {
  const drawerRef: any = createRef()
  return (
    <React.Fragment>
      <Button
        type="primary"
        onClick={drawerRef.current.toggleVisibility(
          !!drawerRef.current.getVisibility()
        )}
        className={config.buttonClass || ''}
        {...(config.buttonProps || {})}
      >
        {config.buttonLabel}
      </Button>
      <GenericDrawer {...config} ref={drawerRef} />
    </React.Fragment>
  )
}

const DrawerWrapper = ({
  children,
  ...props
}: IGenericDrawerProps & { children: any }) => {
  const drawerRef: any = createRef()

  return (
    <>
      <div onClick={() => drawerRef.current.toggleVisibility(true)}>
        {children}
      </div>
      <GenericDrawer {...props} ref={drawerRef} />
    </>
  )
}

export { DrawerWrapper, ButtonDrawer }
