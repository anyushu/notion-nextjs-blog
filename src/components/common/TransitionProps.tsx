import { LinearProgress } from '@mui/material'
import Router from 'next/router'
import React from 'react'

/**
 * @returns {JSX.Element | null} LinearProgress component
 */
const TransitionProgress = (): JSX.Element | null => {
  const [progress, setProgress] = React.useState(false)

  const setEnabled = React.useCallback(() => setProgress(true), [])
  const setDisabled = React.useCallback(() => setProgress(false), [])

  React.useEffect(() => {
    Router.events.on('routeChangeStart', setEnabled)
    Router.events.on('routeChangeComplete', setDisabled)
    Router.events.on('routeChangeError', setDisabled)

    return () => {
      Router.events.off('routeChangeStart', setEnabled)
      Router.events.off('routeChangeComplete', setDisabled)
      Router.events.off('routeChangeError', setDisabled)
    }
  }, [setEnabled, setDisabled])

  return progress ? (
    <div style={{ zIndex: 999, position: 'fixed', top: 0, left: 0, right: 0 }}>
      <LinearProgress />
    </div>
  ) : null
}

export default TransitionProgress
