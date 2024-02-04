import React from 'react'
import styles from './RoleItem.module.css'
import { Link } from "react-router-dom";

const RoleItem = ({ role, controller }) => {
  return (
    
      <div className={styles.roleItemCard}>
        <div className={styles.roleItemheading}>
          <h3>{controller}</h3>
        </div>
      </div>
    
  )
}

export default RoleItem;