import ErrorBoundary from 'antd/lib/alert/ErrorBoundary'
import React, { ReactElement } from 'react'

export const CustomErrorBoundary = ({
  children,
}: {
  children: ReactElement
}) => {
  return <ErrorBoundary>{children}</ErrorBoundary>
}
