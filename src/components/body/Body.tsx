import type { FunctionComponent, PropsWithChildren } from "react"

import styles from './Body.module.css'

const Body: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.body}>
      {children}
    </div>
  )

}

export default Body